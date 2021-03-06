const graphql = require('graphql');
const { find, filter } = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const Player = require('../models/player.js');
const Team = require('../models/team.js');

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    position: { type: GraphQLString },
    isRightFooted: { type: GraphQLBoolean },
    teamId: { type: GraphQLID },
    team: {
      type: TeamType,
      resolve(parent, args) {
        return Team.findById(parent.teamId);
      }
    }
  })
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    leaguePosition: { type: GraphQLInt },
    city: { type: GraphQLString },
    players: {
      type: GraphQLList(PlayerType),
      resolve(parent, args) {
        return Player.find({ teamId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    player: {
      type: PlayerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Player.findById(args.id);
      }
    },
    team: {
      type: TeamType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Team.findById(args.id);
      }
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parent, args) {
        return Player.find({});
      }
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return Team.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTeam: {
      type: TeamType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        leaguePosition: { type: new GraphQLNonNull(GraphQLInt) },
        city: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let team = new Team({
          name: args.name,
          leaguePosition: args.leaguePosition,
          city: args.city
        });
        return team.save();
      }
    },
    addPlayer: {
      type: PlayerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) },
        isRightFooted: { type: new GraphQLNonNull(GraphQLBoolean) },
        teamId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let player = new Player({
          name: args.name,
          position: args.position,
          isRightFooted: args.isRightFooted,
          teamId: args.teamId
        });
        return player.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
