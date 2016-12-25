import {Graph, json as jsonUtils} from 'graphlib';

export const Map = (rooms, connections) => {
    const g = new Graph();

    //build graph
    rooms.forEach(room => g.setNode(room.id, room));
    connections.forEach(([fromId, toId]) => {
        g.setEdge(fromId, toId);
    });

    return {
        getConnectedRooms: (id) => {
            const outConnections = g.outEdges(id);
            console.log(outConnections);

            return outConnections;
        },
        debug: () => {
            console.log(jsonUtils.write(g));
        }
    };
};

//this function should eventually be doing randomization of the dungeon
export const generateMap = () => {
    const rooms = [
        {
            id: 'r1',
            name: 'goblin pit',
            description: 'there\'s a goblin sleeping in the center of the room'
        },
        {
            id: 'r2',
            name: 'treasure room',
            description: 'there\'s a big pile of gold.  oh boy!'
        },
        {
            id: 'r3',
            name: 'warg den',
            description: 'its very dark in here.  you see red eyes watching you from the shadows...'
        }
    ];

    const connections = [
        ['r1', 'r3'],
        ['r3', 'r2']
    ];

    return Map(rooms, connections);
};
