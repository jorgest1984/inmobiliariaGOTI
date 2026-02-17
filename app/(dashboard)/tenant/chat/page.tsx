
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Send, Plus, User, Building2 } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

// Mock Data
const initialConversations = [
    {
        id: '1',
        recipient: { name: 'Administración', role: 'admin', avatar: null },
        lastMessage: 'Su incidencia ha sido registrada correctamente.',
        timestamp: '10:30 AM',
        unread: 1,
        messages: [
            { id: 'm1', sender: 'me', text: 'Buenos días, he reportado una incidencia con la caldera.', timestamp: '10:15 AM' },
            { id: 'm2', sender: 'other', text: 'Hola Juan, gracias por avisar. Su incidencia ha sido registrada correctamente. Un técnico le contactará pronto.', timestamp: '10:30 AM' },
        ]
    },
    {
        id: '2',
        recipient: { name: 'Carlos (Propietario)', role: 'owner', avatar: null },
        lastMessage: '¿Podría pasarme el recibo del mes pasado?',
        timestamp: 'Ayer',
        unread: 0,
        messages: [
            { id: 'm3', sender: 'other', text: 'Hola Juan, ¿qué tal todo en el piso?', timestamp: 'Ayer 09:00 AM' },
            { id: 'm4', sender: 'me', text: 'Todo bien Carlos, gracias. Todo funciona correctamente.', timestamp: 'Ayer 09:15 AM' },
            { id: 'm5', sender: 'other', text: 'Me alegro. ¿Podría pasarme el recibo del mes pasado? No me aparece en el banco.', timestamp: 'Ayer 09:20 AM' },
        ]
    }
]

export default function TenantChatPage() {
    const [conversations, setConversations] = useState(initialConversations)
    const [selectedChatId, setSelectedChatId] = useState<string | null>(initialConversations[0].id)
    const [newMessage, setNewMessage] = useState('')

    // New Chat State
    const [isNewChatOpen, setIsNewChatOpen] = useState(false)
    const [newChatRecipient, setNewChatRecipient] = useState('')
    const [newChatMessage, setNewChatMessage] = useState('')

    const selectedChat = conversations.find(c => c.id === selectedChatId)

    const handleSendMessage = () => {
        if (!newMessage.trim() || !selectedChatId) return

        const updatedConversations = conversations.map(chat => {
            if (chat.id === selectedChatId) {
                return {
                    ...chat,
                    lastMessage: newMessage,
                    timestamp: 'Ahora',
                    messages: [
                        ...chat.messages,
                        {
                            id: Date.now().toString(),
                            sender: 'me',
                            text: newMessage,
                            timestamp: 'Ahora'
                        }
                    ]
                }
            }
            return chat
        })

        setConversations(updatedConversations)
        setNewMessage('')
    }

    const handleCreateChat = () => {
        if (!newChatRecipient || !newChatMessage.trim()) return

        const newChat = {
            id: Date.now().toString(),
            recipient: {
                name: newChatRecipient === 'admin' ? 'Administración' : 'Propietario',
                role: newChatRecipient,
                avatar: null
            },
            lastMessage: newChatMessage,
            timestamp: 'Ahora',
            unread: 0,
            messages: [
                { id: Date.now().toString(), sender: 'me', text: newChatMessage, timestamp: 'Ahora' }
            ]
        }

        setConversations([newChat, ...conversations])
        setSelectedChatId(newChat.id)
        setIsNewChatOpen(false)
        setNewChatRecipient('')
        setNewChatMessage('')
    }

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
            {/* Conversations List */}
            <Card className="w-full md:w-1/3 flex flex-col">
                <CardHeader className="border-b px-4 py-3 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Mensajes</CardTitle>
                    <Dialog open={isNewChatOpen} onOpenChange={setIsNewChatOpen}>
                        <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                                <Plus className="h-4 w-4 md:mr-2" />
                                <span className="hidden md:inline">Nuevo</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Nueva Conversación</DialogTitle>
                                <DialogDescription>
                                    Inicia un chat con el administrador o el propietario.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label>Destinatario</Label>
                                    <Select onValueChange={setNewChatRecipient}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccionar usuario" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="admin">Administrador (Agencia)</SelectItem>
                                            <SelectItem value="owner">Propietario de la vivienda</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Mensaje Inicial</Label>
                                    <Textarea
                                        placeholder="Escribe tu mensaje aquí..."
                                        value={newChatMessage}
                                        onChange={(e) => setNewChatMessage(e.target.value)}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={handleCreateChat} disabled={!newChatRecipient || !newChatMessage}>Enviar Mensaje</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <ScrollArea className="flex-1">
                    <div className="flex flex-col gap-1 p-2">
                        {conversations.map((chat) => (
                            <button
                                key={chat.id}
                                onClick={() => setSelectedChatId(chat.id)}
                                className={`flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${selectedChatId === chat.id
                                        ? 'bg-secondary'
                                        : 'hover:bg-muted'
                                    }`}
                            >
                                <Avatar>
                                    <AvatarFallback>
                                        {chat.recipient.role === 'admin' ? <Building2 className="h-4 w-4" /> : <User className="h-4 w-4" />}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-sm">{chat.recipient.name}</span>
                                        <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && (
                                    <Badge variant="default" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                                        {chat.unread}
                                    </Badge>
                                )}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </Card>

            {/* Chat Area */}
            <Card className="flex-1 flex flex-col h-full">
                {selectedChat ? (
                    <>
                        <CardHeader className="border-b px-6 py-3">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarFallback>
                                        {selectedChat.recipient.role === 'admin' ? <Building2 className="h-5 w-5" /> : <User className="h-5 w-5" />}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base">{selectedChat.recipient.name}</CardTitle>
                                    <CardDescription className="text-xs">
                                        {selectedChat.recipient.role === 'admin' ? 'Soporte Agencia' : 'Propietario'}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>

                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {selectedChat.messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${msg.sender === 'me'
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-muted text-foreground'
                                                }`}
                                        >
                                            <p>{msg.text}</p>
                                            <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                                                }`}>
                                                {msg.timestamp}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="p-4 border-t">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSendMessage()
                                }}
                                className="flex gap-2"
                            >
                                <Input
                                    placeholder="Escribe un mensaje..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="flex-1"
                                />
                                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p>Selecciona una conversación para empezar a chatear</p>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    )
}
