/*
 * @Author: buji 
 * @Date: 2017-08-17 11:26:26 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-17 22:21:39
 */

export interface Config {
    city: string;
    host: string;
    service: string;
    auth: Auth;
}

export interface Auth {
    user: string;
    pass: string;
}