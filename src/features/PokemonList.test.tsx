// src/components/PokemonList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import PokemonList from './PokemonList';
import { worker } from '../mocks/browser';

// Must wrap the component in the provider with the store
const renderComponent = (onSelectPokemon = jest.fn()) =>
  render(
    <Provider store={store}>
      <PokemonList onSelectPokemon={onSelectPokemon} />
    </Provider>
  );

describe('PokemonList', () => {
  it('displays a list of pokemons', async () => {
    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the data to load and re-render
    const listItem = await screen.findByText('bulbasaur');
    expect(listItem).toBeInTheDocument();
    expect(screen.getByText('ivysaur')).toBeInTheDocument();
  });
});
