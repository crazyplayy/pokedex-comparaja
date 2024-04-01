import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { Card, Col, Row, Spin } from 'antd';
import Pagination from '../components/utils/Pagination';


const FullPokedex = () => {
  const { pokemonList, loading, error, currentPage, totalPages, goToNextPage, goToPreviousPage } = usePokemonContext();

  return (
    <div>
      {loading && <Spin />}
      {error && error}
      {pokemonList.length > 0 && (
        <>
          <Row gutter={[16, 16]}>
            {pokemonList.map((pokemon, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                <Card title={pokemon.name} style={{ height: '100%' }}>
                  {/* Placeholder content */}
                  <p>Placeholder image</p>
                  <p>Placeholder description</p>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onLeftClick={goToPreviousPage}
            onRightClick={goToNextPage}
          />
        </>
      )}
    </div>
  );
};

export default FullPokedex;
