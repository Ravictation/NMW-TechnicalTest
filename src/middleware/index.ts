import express from 'express';

import {get, merge} from 'lodash';

import {getUserBySessionToken} from '../db/user';

export const isAuthenticated = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['APP-AUTH']

        if(!sessionToken) {
            return res.status(403).json({
                message: "unauthorized, need to log in first"
            })
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser){
            return res.status(403).json({
                message: "unauthorized, need to log in first"
            })
        }

        merge(req, {identity: existingUser})

        return next()
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}