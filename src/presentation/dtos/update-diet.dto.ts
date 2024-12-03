import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateDietDto {
    @IsOptional()
    @IsString()
    patientName: string;

    @IsOptional()
    @IsDateString()
    startDate?: string;

    @IsOptional()
    @IsString()
    description?: string;
}