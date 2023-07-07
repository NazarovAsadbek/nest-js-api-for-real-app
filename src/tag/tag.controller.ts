import { Controller, Get } from '@nestjs/common';
import { TagService } from '@app/tag/tag.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tags')
@ApiTags('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  @ApiOperation({ summary: 'Find all tags' })
  @ApiCreatedResponse({
    description: '',
    type: String,
    isArray: true,
  })
  async findALl(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
