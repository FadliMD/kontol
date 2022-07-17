const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
╭─❑ 「 *SOSIAL MEDIA* 」 ❑──
│ Follow sosial media
│ owner yuk biar saling
│ kenal...
╰❑
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya6)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Tiktok creator',
               url: tt
             }

           },
                {
               urlButton: {
               displayText: 'Youtube creator',
               url: yt
             }

           },
               {
urlButton: {
               displayText: 'Instagram Creator',
               url: webm
             }

           },
               {
             quickReplyButton: {
               displayText: 'Store',
               id: '.store',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Biodata',
               id: '.biodata',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(sosialmedia)$/i
handler.help = ['sosialmedia']
module.exports = handler
