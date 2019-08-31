import { createParamDecorator } from "@nestjs/common";
import { request } from "https";
import { User } from "./user.entity";

export const GetUser = createParamDecorator((data, req): User => {
    return req.user;
});
