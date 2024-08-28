import httpStatus from 'http-status';

import { Product } from '../products/product.model';
import { ITeam } from './team.interface';
import { Team } from './team.model';
import AppError from '../../errors/AppError';


const createTeam = async (payload: ITeam) => {
 const isExistTeam= await Team.findOne({name:payload.name})
 if(isExistTeam){
  throw new AppError(httpStatus.BAD_REQUEST,'The team name already exist!')
 }

 const result=await Team.create(payload)
 return result
};

const getAllTeams = async () => {
  const result = await Team.find();
  return result;
};





export const teamServices = {
createTeam,
getAllTeams
};
