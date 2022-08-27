import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})
export class User {

    @Prop({
        required: true
    })
    displayName: string;   

    @Prop({
        required: true
    })
    email: string; 

    @Prop({
        required: true
    })
    photoURL: string; 
   
    //post
    //story
    //likes
    //follows

}
const user = new User();

export const UserSchema = SchemaFactory.createForClass(User);