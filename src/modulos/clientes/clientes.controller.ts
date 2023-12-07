import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post('/')
  create(@Body() createClienteDto: CreateClienteDto) {
    console.log('usuario creado')
    return this.clientesService.create(createClienteDto);
  }

  @Get('listar')
  findAll( @Query() paginationDto: PaginationDTO ) {
    console.log(paginationDto)
    return this.clientesService.findAll()
}

  @Get(':nif')
  findOne(@Param('nif') nif: string) {
    return this.clientesService.findOne(nif);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
