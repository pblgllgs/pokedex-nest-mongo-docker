import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    const { results } = data;
    const resp = results.map((poke) => {
      return {
        id: poke.url.split('/')[poke.url.split('/').length - 2],
        name: poke.name,
      };
    });
    return resp;
  }
}
