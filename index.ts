/*
 * @Author: buji 
 * @Date: 2017-08-17 20:41:39 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-18 19:46:21
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Config } from './lib/config';
import { scheduleJob } from 'node-schedule';
import { createTransport, Transporter, Transport, SendMailOptions, SentMessageInfo } from 'nodemailer';

const weather = {
    start(config: Config) {
        scheduleJob('0 0 7 * * *', () => {
            axios.get('http://www.sojson.com/open/api/weather/json.shtml', {
                params: { city: config.city }
            }).then((response: AxiosResponse) => {
                const transporter = createTransport({
                    service: config.service,
                    auth: config.auth
                });

                const mailOptions: SendMailOptions = {
                    from: config.auth.user,
                    to: config.auth.user,
                    subject: 'weather hint!!!!',
                    text: JSON.stringify(response.data)
                }

                transporter.sendMail(mailOptions, (error: Error, info: SentMessageInfo) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Message sent: ", info);
                    }
                })

            }).catch((error: Error) => console.log(error));
        });
    }
}

export default weather;
