module.exports.config = {
  name: "antiout",
  version: "1.0.0"
};
module.exports.handleEvent = async ({
  event,
  api
}) => {
  if (event.logMessageData?.leftParticipantFbId === api.getCurrentUserID()) return;
  if (event.logMessageData?.leftParticipantFbId) {
    const info = await api.getUserInfo(event.logMessageData?.leftParticipantFbId);
    const {
      name
    } = info[event.logMessageData?.leftParticipantFbId];
    api.addUserToGroup(event.logMessageData?.leftParticipantFbId, event.threadID, (error) => {
      if (error) {
        api.sendMessage(`𝐓'𝐚𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐡𝐚𝐧𝐠𝐞 ❄${name}❄ 𝐣𝐞 𝐩𝐞𝐮𝐭 𝐩𝐚𝐬 𝐭𝐞 𝐫𝐞-𝐚𝐣𝐨𝐮𝐭é 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐫`, event.threadID);
      } else {
        api.sendMessage(`𝐋𝐚 𝐜𝐦𝐝 𝐚𝐧𝐭𝐢𝐨𝐭 𝐞𝐬𝐭 𝐚𝐜𝐭𝐢𝐯é,🛸${name}🛸 𝐛𝐢𝐞𝐧𝐯𝐞𝐧𝐮 𝐝𝐚𝐧𝐬 𝐦𝐨𝐧 𝐠𝐞𝐧𝐣𝐮𝐭𝐬𝐮 !`, event.threadID);
      }
    });
  }
};
