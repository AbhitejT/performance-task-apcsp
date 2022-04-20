// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000708080808080808080808080808080203090d0909091109090909090909090603090909090a0a090909090a0909090603110a0a090a0909090a0a0a09090906030909090b090909090a0909090e09060309090909090909090b0909090909060309090a0909090a0909090a0a0a09060309090a0a09090a0a090909090a090603090909090909090a090909090909060309090909091009090909090909090603090a0a0a0909090909090a0a110b0603110a09090b090909090a0a0a11090603090909090a090909090a090909090603090c09090a090a0a090a090f0909060309090909110909090911090909090601040404040404040404040404040405`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 2 . . . . 2 . . . 2 
2 . 2 2 . 2 . . . 2 2 2 . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . . . 2 . . . 2 2 2 . 2 
2 . . 2 2 . . 2 2 . . . . 2 . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . . . . . . 2 2 . . 2 
2 . 2 . . . . . . . 2 2 2 . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . 2 2 . 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight4,sprites.dungeon.buttonOrangeDepressed,sprites.swamp.swampTile5,sprites.swamp.swampTile4,sprites.swamp.swampTile6,sprites.swamp.swampTile7,sprites.swamp.swampTile13,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
