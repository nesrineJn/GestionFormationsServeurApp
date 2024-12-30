/*
    * Developer: Nesrine jouini
    * Company: ISET_RADES
    * Date: 30/12/2024
    */

    


   
    import { FormationModelType } from '../types';
    import FormationModel from '../models/formation.model';
    import { FilterQuery, UpdateQuery } from 'mongoose';
    import { InternalServerError } from '../errors';

      export function createOne(formation: FormationModelType) {
        try {
          return  FormationModel.create(formation);
        } catch (error) {
        throw new InternalServerError('','formation.service createOne',formation  )
        }
      }

      export function createMany(formations: FormationModelType[] ) {
        try {
          return  FormationModel.insertMany(formations);
        } catch (error) {
        throw new InternalServerError('','formation.service createMany',formations  )
        }
      }
    
      export function getOne(filter: FilterQuery<FormationModelType>) {
        try {
          return  FormationModel.findOne(filter);
        } catch (error) {
        throw new InternalServerError('','formation.service getOne',filter  )
        }
      }
      export function getById(_id: string) {
        try {
          return  FormationModel.findById(_id);
        } catch (error) {
        throw new InternalServerError('','formation.service getById',{_id}  )
        }
      }

      export function getMany(filter: FilterQuery<FormationModelType>) {
        try {
          return  FormationModel.find(filter);
        } catch (error) {
        throw new InternalServerError('','formation.service getMany',filter  )
        }
      }

      export function count(filter: FilterQuery<FormationModelType>) {
        try {
          return  FormationModel.countDocuments(filter);
        } catch (error) {
        throw new InternalServerError('','formation.service count',filter  )
        }
      }

      


      export async function updateOne(filter: FilterQuery<FormationModelType>,update:UpdateQuery<FormationModelType>) {
        try {
          return  await FormationModel.updateOne(filter,update);
        } catch (error) {
        throw new InternalServerError('','formation.service updateOne',{filter,update}  )
        }
      }


      export async function updateMany(filter: FilterQuery<FormationModelType>,update:UpdateQuery<FormationModelType>) {
        try {
          return  await FormationModel.updateMany(filter,update);
        } catch (error) {
        throw new InternalServerError('','formation.service updateMany',{filter,update}  )
        }
      }

      export async function  getIdis(filter: FilterQuery<FormationModelType>) {
        try {
          return await FormationModel.find(filter).distinct('_id')
        } catch (error) {
        throw new InternalServerError('','formation.service getIdis',filter  )
        }
      }
    