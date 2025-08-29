import React, { useState, useEffect, useRef } from 'react'

interface ChatMessage {
  id: string
  user: string
  message: string
  timestamp: Date
  avatar?: string
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: 'Ana García',
      message: '¡Hola a todos! ¿Qué opinan sobre las nuevas propuestas de transporte público en Bogotá?',
      timestamp: new Date(Date.now() - 300000),
      avatar: '👩‍💼'
    },
    {
      id: '2',
      user: 'Carlos Rodríguez',
      message: 'Creo que es un paso en la dirección correcta. Necesitamos más opciones sostenibles.',
      timestamp: new Date(Date.now() - 240000),
      avatar: '👨‍🔬'
    },
    {
      id: '3',
      user: 'María López',
      message: 'Estoy de acuerdo, pero también debemos considerar el impacto económico en las familias.',
      timestamp: new Date(Date.now() - 180000),
      avatar: '👩‍🏫'
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [currentUser] = useState('Usuario Anónimo')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        user: currentUser,
        message: newMessage,
        timestamp: new Date(),
        avatar: '👤'
      }
      setMessages(prev => [...prev, message])
      setNewMessage('')
    }
  }



  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="glass-card mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-colombia-blue">💬 Chat Comunitario</h1>
              <p className="text-gray-600">Conversación en tiempo real entre ciudadanos colombianos</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Usuarios conectados</div>
              <div className="text-2xl font-bold text-colombia-red">{messages.length + 15}</div>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="glass-card">
          <div className="flex flex-col h-[600px]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessageComponent key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="form-input flex-1"
                  maxLength={500}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!newMessage.trim()}
                >
                  Enviar
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Recuerda mantener un diálogo respetuoso y constructivo
              </div>
            </form>
          </div>
        </div>

        {/* Chat Guidelines */}
        <div className="glass-card mt-6">
          <h3 className="text-lg font-semibold text-colombia-blue mb-3">📋 Normas del Chat</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Mantén un lenguaje respetuoso y constructivo</li>
            <li>• Evita contenido ofensivo, discriminatorio o violento</li>
            <li>• Fomenta el diálogo democrático y la participación ciudadana</li>
            <li>• No compartas información personal o privada</li>
            <li>• Reporta cualquier comportamiento inapropiado</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

interface ChatMessageComponentProps {
  message: ChatMessage
}

const ChatMessageComponent: React.FC<ChatMessageComponentProps> = ({ message }) => {
  return (
    <div className="flex space-x-3">
      <div className="w-10 h-10 bg-colombia-yellow rounded-full flex items-center justify-center text-lg">
        {message.avatar}
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-semibold text-colombia-blue">{message.user}</span>
          <span className="text-xs text-gray-500">{message.timestamp.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="bg-white/70 rounded-lg p-3 shadow-sm">
          <p className="text-gray-800">{message.message}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatPage