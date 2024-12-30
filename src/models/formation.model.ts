/*
    * Developer: Nesrine jouini
    * Company: ISET_RADES
    * Date: 30/12/2024
    */ 
 

    
import { Schema, model, Types, Document } from 'mongoose';
import {  FormationModelType } from '../types';





export const formationSchema = new Schema<FormationModelType>(
 {

 },
  { timestamps: true },
);


const FormationModel = model<FormationModelType>('formation', formationSchema);


export default FormationModel;
    