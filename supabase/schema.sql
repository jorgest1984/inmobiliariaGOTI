
-- Create profiles table to extend auth.users
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  full_name text,
  role text check (role in ('tenant', 'owner', 'admin')),
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create properties table
create table public.properties (
  id uuid default gen_random_uuid() primary key,
  address text not null,
  description text,
  price numeric,
  status text check (status in ('available', 'rented', 'sold')) default 'available',
  owner_id uuid references public.profiles(id),
  images text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create tenancies table (linking tenants to properties)
create table public.tenancies (
  id uuid default gen_random_uuid() primary key,
  property_id uuid references public.properties(id),
  tenant_id uuid references public.profiles(id),
  start_date date,
  end_date date,
  rent_amount numeric,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create receipts table
create table public.receipts (
  id uuid default gen_random_uuid() primary key,
  tenancy_id uuid references public.tenancies(id),
  amount numeric not null,
  due_date date,
  status text check (status in ('pending', 'paid', 'overdue')) default 'pending',
  type text check (type in ('rent', 'utility', 'other')),
  file_url text, -- Link to PDF storage
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create incidents table
create table public.incidents (
  id uuid default gen_random_uuid() primary key,
  tenancy_id uuid references public.tenancies(id),
  title text not null,
  description text,
  status text check (status in ('open', 'in_progress', 'resolved', 'closed')) default 'open',
  reported_by uuid references public.profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies (Examples)

-- Profiles: Users can view their own profile. Admin can view all.
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Properties: Visible to everyone (public listings). 
create policy "Properties are viewable by everyone"
  on properties for select
  using ( true );

-- Incidents: Tenants can see their own incidents. Admins can see all.
create policy "Tenants can view own incidents"
  on incidents for select
  using ( 
    auth.uid() in (
      select tenant_id from tenancies where id = incidents.tenancy_id
    ) 
    or 
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

