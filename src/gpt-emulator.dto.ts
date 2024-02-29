import {ApiPropertyOptional,} from "@nestjs/swagger";

export class TestDto {
    @ApiPropertyOptional()
    message?: string;
}
