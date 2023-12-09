import axios from "axios";
import qs from 'qs';

const CONFIRMATION_MESSAGE = 'Bonjour Mr./ Mme SURNAME \nVotre RDV au centre de santé est bien confirmée le DATE_RDV';

export const sendWhatsappConfirmationMessage = async (surName: string, tel: string, startDate: Date) => {

    const bodyMsg = CONFIRMATION_MESSAGE.replace('SURNAME', surName).replace('DATE_RDV', startDate.toLocaleString());
    const dataSendMsg = qs.stringify({
      "token": import.meta.env.VITE_ULTRA_MSG_TOKEN,
      "to": tel,
      "body": bodyMsg
    });

    const config = {
      method: 'post',
      url: 'https://api.ultramsg.com/instance70436/messages/chat',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: dataSendMsg
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }