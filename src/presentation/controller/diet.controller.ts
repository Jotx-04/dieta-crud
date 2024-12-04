import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateDietDto } from "../dtos/create-diet.dto";
import { CreateDietCommand } from "src/application/commands/create-diet.command";
import { GetDietByIdQuery } from "src/application/queries/get-diet-by-id.query";
import { DeleteDietCommand } from "src/application/commands/delete-diet.command";
import { UpdateDietDto } from "../dtos/update-diet.dto";
import { UpdateDietCommand } from "src/application/commands/update-diet.command";
import { GetAllDietsQuery } from "src/application/queries/get-all-diet.query";

@Controller('diets')
export class DietController{
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus){}

    @Post()
    async createDiet(@Body() createDietDto: CreateDietDto){
        const { patientName, startDate, description} = createDietDto;
        await this.commandBus.execute(
            new CreateDietCommand(patientName, new Date(startDate), description),
        );
    }

    @Get()
  async getAllDiets() {
    return this.queryBus.execute(new GetAllDietsQuery());
  }

    @Get(':id')
    async getDietById(@Param('id') id: string){
        return this.queryBus.execute(new GetDietByIdQuery(id));
    }

    @Put(':id')
    async updateDiet(@Param('id') id: string, @Body() updateDietDto: UpdateDietDto) {
        const updates = {
            ...updateDietDto,
            startDate: updateDietDto.startDate ? new Date(updateDietDto.startDate) : undefined,
        };
        await this.commandBus.execute(new UpdateDietCommand(id, updates));
    }

    @Delete(':id')
    async deleteDiet(@Param('id') id: string) {
        await this.commandBus.execute(new DeleteDietCommand(id));
    }

}