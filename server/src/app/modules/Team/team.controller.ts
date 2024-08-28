import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { teamServices } from './team.service';


const createTeam = catchAsync(async (req, res) => {
  const result = await teamServices.createTeam(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team is created successfully',
    data: result,
  });
});
const getAllTeams = catchAsync(async (req, res) => {
  const result = await teamServices.getAllTeams;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teams are fetched successfully',
    data: result,
  });
});


export const teamControllers = {
    createTeam,
    getAllTeams,


};
