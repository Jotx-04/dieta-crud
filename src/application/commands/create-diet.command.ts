export class CreateDietCommand {
    constructor(
        public readonly patientName: string,
        public readonly startDate: Date,
        public readonly description: string
    ){}
}