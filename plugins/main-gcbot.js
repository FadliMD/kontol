/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*––––––『 GROUP BOT 』––––––*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya4)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '```jika mau masuk via link aja kak….```\n```gak mau jg gpp```',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Via link gc',
               url: 'https://chat.whatsapp.com/KGRJ7i0M2DL0WKqKabNUey'
             }

           },
                {
               urlButton: {
               displayText: 'Wa owner',
               url: 'https://chat.whatsapp.com/KGRJ7i0M2DL0WKqKabNUey'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Sewa',
               id: '.sewazifa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
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
handler.command = /^(gcbot)$/i
handler.help = ['gcbot']
module.exports = handler
