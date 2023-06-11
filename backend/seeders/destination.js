'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('destinations', [
      {
        location: 'Venice, Italy',
        image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVuaWNlJTIwaXRhbHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Venice is a city built on water, known for its beautiful canals, colorful buildings, and romantic gondola rides.',
        price: 500,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        location: 'Harbour Island, Bahamas',
        image: 'https://images.unsplash.com/photo-1589786161184-6d43d20526e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFoYW1hc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
        description: 'Harbour Island is a small, picturesque island located off the coast of Eleuthera in the Bahamas.',
        price: 800,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        location: 'Manila, Philippines',
        image: 'https://images.unsplash.com/photo-1599272585578-03bfc70032b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuaWxhJTIwcGhpbGlwcGluZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Manila is a bustling metropolis and the capital city of the Philippines.',
        price: 1200,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        location: 'Rio de Janeiro, Brazil',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Rio de Janeiro is a vibrant city known for its beautiful beaches, lively music and dance scene, and famous landmarks like the Christ the Redeemer statue.',
        price: 1200,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        location: 'Sydney, Australia',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN5ZG5leSUyMGF1c3RyYWxpYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
        description: 'Sydney is a vibrant and cosmopolitan city located on the east coast of Australia.',
        price: 1200,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        location: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1594048069339-42ae0e89376a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FudG9yaW5pJTIwZ3JlZWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Santorini is a beautiful island located in the Aegean Sea, known for its stunning views, white-washed buildings, and beautiful sunsets.',
        price: 1200,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('destinations', null, {});
  }
};
