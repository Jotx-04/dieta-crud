import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateDietDto{
    @IsNotEmpty()
    @IsString()
    patientName: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}