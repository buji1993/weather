/*
 * @Author: buji 
 * @Date: 2017-08-17 11:26:26 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-18 20:01:43
 */

export interface Config {
    city: string;
    service: string;
    auth: Auth;
}

export interface Auth {
    user: string;
    pass: string;
}