import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Request } from 'express'
@Controller('product')
@ApiBearerAuth()
export class ProductController{
    constructor(
        private productService: ProductService
    ) {}
    
    @Post()
    create(@Body() productDto: ProductDto, @Req() req: Request){
        return this.productService.create(productDto, req.user['user'])
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.productService.remove(id)
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.productService.findOne(id)
    } 

    @Get()
    findAll(){
        return this.productService.findAll()
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() productDto: ProductDto){
        return this.productService.update(id, productDto)
    }

}