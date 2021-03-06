const expect = require('chai').expect;

describe('checkForShip', function(){
  const checkForShip = require('../src/game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinates', function(){

    player = {
      ships: [
        {
          locations :[[0, 0]]
        }
      ]
    };

    expect(checkForShip(player,[9,9])).to.be.false;
  });

  it('should correctly report a ship located at the given coordinates', function(){

    player = {
      ships: [
        {
          locations :[[0, 0]]
        }
      ]
    };

    expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
  });

  it('should handle ships located at more than one cooardinate', function(){

    player = {
      ships: [
        {
          locations :[[0, 0], [0, 1]]
        }
      ]
    };

    expect(checkForShip(player,[0, 1])).to.deep.equal(player.ships[0]);//á að vera true
    expect(checkForShip(player,[0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player,[9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', function(){

    player = {
      ships: [
        {
          locations :[[0, 0], [0, 1]]
        },
        {
          locations :[[1, 0], [1, 1]]
        },
        {
          locations :[[2, 0], [2, 1], [2, 2], [2, 3]]
        }
      ]
    };
    expect(checkForShip(player,[0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player,[0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player,[1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player,[1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player,[2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player,[9, 9])).to.be.false;
  });
});

describe("damageShip", function (){
  const damageShip = require('../src/game_logic/ship_methods.js').damageShip;

  it('should register damage on a given ship at a given location', function() {
   let ship = {
     location: [[0,0,]],
     damage: []
   };

   damageShip(ship, [0,0]);

   expect(ship.damage).to.not.be.empty;
   expect(ship.damage[0]).to.deep.equal([0,0]);
 });
});
describe('fire', function () {
	const fire = require('../src/game_logic/ship_methods').fire;

	it('should record damage on the given players ship at a given cooardinate', function () {
		var player = {
			ships: [
				{
					locations: [[0, 0]],
					damage: []
				}
			]
		};

		fire(player, [0, 0]);
		expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
	});

	it('should NOT record damage if there is no ship at my cooardinate', function () {
		let player = {
			ships: [
				{
					locations: [[9, 9]],
					damage: []
				}
			]
		};

		fire(player, [0, 0]);
		expect(player.ships[0].damage).to.be.empty;
	});
});
