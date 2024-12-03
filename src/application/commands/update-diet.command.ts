export class UpdateDietCommand {
    constructor(
        public readonly id: string,
        public readonly updates: Partial<{
            patientName: string;
            startDate: Date;
            description: string;
        }>,
    ) {}
}