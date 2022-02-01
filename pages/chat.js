// import { createClient } from '@supabase/supabase-js'

// import { Box, Text, TextField, Image, Button } from '@skynexui/components'
// import React, { useEffect, useState } from 'react'
// import appConfig from '../config.json'
// import { useRouter } from 'next/router'
// import { ButtonSendSticker } from '../src/components/ButtonSendSticker'

// const SUPABASE_ANON_KEY =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ4NjA4NiwiZXhwIjoxOTU5MDYyMDg2fQ.U8MSwfFb56iC6juMar4V7xMc2MORFkZZDhuny8zKlF0'
// const SUPABASE_URL = 'https://rjzhpcnhrjxytvooyjoy.supabase.co'

// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// function realTimeInsertMessages(addMessage) {
//   return supabase
//     .from('mesagens')
//     .on('INSERT', realTimeMessage => {
//       addMessage(realTimeMessage.new)
//     })
//     .subscribe()
// }

// export default function ChatPage() {
//   const [message, setMessage] = useState('')
//   const [messageList, setMessageList] = useState([])

//   const router = useRouter()

//   const activeUser = router.query.username

//   useEffect(() => {
//     supabase
//       .from('mesagens')
//       .select('*')
//       .order('id', { ascending: false })
//       .then(({ data }) => {
//         setMessageList(data)
//       })

//     realTimeInsertMessages(newMessage => {
//       setMessageList(oldMessage => {
//         return [newMessage, ...oldMessage]
//       })
//     })
//   }, [])

//   function handleNewMessage(newMessage) {
//     const message = {
//       from: activeUser,
//       text: newMessage
//     }

//     supabase
//       .from('mesagens')
//       .insert([message])
//       .then(({ data }) => {})

//     setMessage('')
//   }

//   // function handleDeleteMessage(messageToRemove) {
//   //   const messageId = messageToRemove.id
//   //   const messageListFiltered = messageList.filter((messageFiltered) => {
//   //     return messageFiltered.id != messageId
//   //   })

//   //   setMessageList(messageListFiltered);
//   // }

//   return (
//     <Box
//       styleSheet={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: appConfig.theme.colors.primary[500],
//         backgroundImage:
//           'url(https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' ||
//           'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundBlendMode: 'multiply',
//         color: appConfig.theme.colors.neutrals['000']
//       }}
//     >
//       <Box
//         styleSheet={{
//           display: 'flex',
//           flexDirection: 'column',
//           flex: 1,
//           boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
//           borderRadius: '5px',
//           backgroundColor: appConfig.theme.colors.primary[900],
//           height: '100%',
//           maxWidth: '95%',
//           maxHeight: '95vh',
//           padding: '32px'
//         }}
//       >
//         <Header />
//         <Box
//           styleSheet={{
//             position: 'relative',
//             display: 'flex',
//             flex: 1,
//             height: '80%',
//             backgroundColor: appConfig.theme.colors.primary[800],
//             flexDirection: 'column',
//             borderRadius: '5px',
//             padding: '16px'
//           }}
//         >
//           <MessageList messageList={messageList} />

//           <Box
//             as="form"
//             styleSheet={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: '5px'
//             }}
//           >
//             <TextField
//               value={message}
//               onChange={({ target }) => {
//                 setMessage(target.value)
//               }}
//               onKeyPress={event => {
//                 if (event.key === 'Enter') {
//                   event.preventDefault()

//                   handleNewMessage(message)
//                 }
//               }}
//               placeholder="Insira sua mensagem aqui..."
//               type="textarea"
//               styleSheet={{
//                 width: '100%',
//                 border: '0',
//                 resize: 'none',
//                 borderRadius: '5px',
//                 padding: '6px 8px',
//                 backgroundColor: appConfig.theme.colors.primary[400],
//                 marginRight: '12px',
//                 color: appConfig.theme.colors.neutrals[999]
//               }}
//             />
//             <ButtonSendSticker
//               onStickerClick={sticker => {
//                 handleNewMessage(':sticker:' + sticker)
//               }}
//             />
//             <Button
//               iconName="FaArrowRight"
//               onClick={event => {
//                 event.preventDefault()
//                 handleNewMessage(message)
//               }}
//               styleSheet={{
//                 height: '5px',
//                 marginBottom: '9px'
//               }}
//               type="submit"
//               size="sm"
//               buttonColors={{
//                 contrastColor: appConfig.theme.colors.neutrals['000'],
//                 mainColor: appConfig.theme.colors.primary[500],
//                 mainColorLight: appConfig.theme.colors.primary[400],
//                 mainColorStrong: appConfig.theme.colors.primary[600]
//               }}
//             />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// function Header() {
//   return (
//     <>
//       <Box
//         styleSheet={{
//           width: '100%',
//           marginBottom: '16px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between'
//         }}
//       >
//         <Text variant="heading5">Chat</Text>
//         <Button
//           variant="tertiary"
//           colorVariant="neutral"
//           label="Logout"
//           href="/"
//         />
//       </Box>
//     </>
//   )
// }

// function MessageList(props) {
//   const handleDeleteMessage = props.handleDeleteMessage

//   return (
//     <Box
//       tag="ul"
//       styleSheet={{
//         overflow: 'auto',
//         display: 'flex',
//         flexDirection: 'column-reverse',
//         flex: 1,
//         color: appConfig.theme.colors.neutrals['000'],
//         marginBottom: '16px'
//       }}
//     >
//       {props.messageList.map(message => {
//         return (
//           <Text
//             key={message.id}
//             tag="li"
//             styleSheet={{
//               borderRadius: '5px',
//               padding: '6px',
//               marginBottom: '12px',
//               wordBreak: 'break-word',
//               hover: {
//                 backgroundColor: appConfig.theme.colors.neutrals[700]
//               }
//             }}
//           >
//             <Box
//               styleSheet={{
//                 marginBottom: '8px'
//               }}
//             >
//               <Image
//                 styleSheet={{
//                   width: '20px',
//                   height: '20px',
//                   borderRadius: '50%',
//                   display: 'inline-block',
//                   marginRight: '8px'
//                 }}
//                 src={`https://github.com/${message.from}.png`}
//               />
//               <Text tag="strong">{message.from}</Text>
//               <Text
//                 styleSheet={{
//                   fontSize: '10px',
//                   marginLeft: '8px',
//                   color: appConfig.theme.colors.neutrals[300]
//                 }}
//                 tag="span"
//               >
//                 {new Date().toLocaleDateString()}
//               </Text>
//             </Box>
//             <Box
//               styleSheet={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center'
//               }}
//             >
//               {message.texto.startsWith(':sticker:') ? (
//                 <Image src={message.texto.replace(':sticker:', '')} />
//               ) : (
//                 message.texto
//               )}
//               {/* <Button
//                 onClick={(event) => {
//                   event.preventDefault();
//                   handleDeleteMessage(message);
//                 }}
//                 label="X"
//                 data-id={message.id}
//                 styleSheet={{
//                   fontSize: '15px',
//                   fontWeight: 'bold',
//                   marginLeft: 'auto',
//                   color: '#FFF',
//                   backgroundColor: 'rgba(0,0,0,.5)',
//                   width: '20px',
//                   height: '20px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   cursor: 'pointer',
//                 }}
//               >
//               </Button> */}
//             </Box>
//           </Text>
//         )
//       })}
//     </Box>
//   )
// }

import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import React, { useEffect } from 'react'
import appConfig from '../config.json'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'
import { ButtonSendSticker } from '../src/components/ButtonSendSticker'

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ4NjA4NiwiZXhwIjoxOTU5MDYyMDg2fQ.U8MSwfFb56iC6juMar4V7xMc2MORFkZZDhuny8zKlF0'
const SUPABASE_URL = 'https://rjzhpcnhrjxytvooyjoy.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function escutaMensagensEmTempoReal(adicionaMensagem) {
  return supabaseClient
    .from('mesagens')
    .on('INSERT', mensagensEmTempoReal => {
      adicionaMensagem(mensagensEmTempoReal.new)
    })
    .subscribe()
}

export default function ChatPage() {
  const roteamento = useRouter()
  const usuarioLogado = roteamento.query.username
  const [mensagem, setMensagem] = React.useState('')
  const [listaDeMensagens, setListaDeMensagens] = React.useState([])

  React.useEffect(() => {
    supabaseClient
      .from('mesagens')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        setListaDeMensagens(data)
      })

    escutaMensagensEmTempoReal(novaMensagem => {
      setListaDeMensagens(antigaMensagem => {
        return [novaMensagem, ...antigaMensagem]
      })
    })
  }, [])

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      // id: listaDeMensagens.length + 1,
      de: usuarioLogado,
      texto: novaMensagem
    }

    supabaseClient
      .from('mesagens')
      .insert([mensagem])
      .then(({ data }) => {
        console.log('Criando mensagem: ', data)
      })

    setMensagem('')
  }

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://images.alphacoders.com/705/705447.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px'
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px'
          }}
        >
          <MessageList mensagens={listaDeMensagens} />
          {/* {listaDeMensagens.map(mensagemAtual => {
            return (
              <li key={mensagemAtual.id}>
                {mensagemAtual.de}: {mensagemAtual.texto}
              </li>
            )
          })} */}
          {/* <MessageList mensagens={[]} /> */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <TextField
              value={mensagem}
              onChange={event => {
                console.log(event)
                const valor = event.target.value
                setMensagem(valor)
              }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  handleNovaMensagem(mensagem)
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200]
              }}
            />
            <ButtonSendSticker
              onStickerClick={sticker => {
                console.log(
                  '[USANDO O COMPONENTE]Salva esse sticker no banco de dados',
                  sticker
                )
                handleNovaMensagem(':sticker: ' + sticker)
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  )
}

function MessageList(props) {
  console.log(props)
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px'
      }}
    >
      {props.mensagens.map(mensagem => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700]
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px'
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px'
                }}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300]
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {/* Condicional: {mensagem.texto.startsWith(':sticker:').toString()} */}
            {mensagem.texto.startsWith(':sticker:') ? (
              <Image src={mensagem.texto.replace(':sticker:', '')} />
            ) : (
              mensagem.texto
            )}
          </Text>
        )
      })}
    </Box>
  )
}
