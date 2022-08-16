import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{
    //id: string; -- lo da mongo
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

//antes de terminar necesitas exportar un Schema

export const pokemonSchema  = SchemaFactory.createForClass(Pokemon);
