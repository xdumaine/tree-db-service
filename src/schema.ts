import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Photo

  interface Classification {
    name: String
    commonNames: [String!]!
  }

  type Genus implements Classification {
    name: String!

    # Genuses Usually have a single common name, but not always
    commonNames: [String!]!
    speciesCount: Int!
  }

  type Species implements Classification {
    name: String!
    genus: Genus!
    commonNames: [String!]!

    leafType: LeafType!

    observations: ObservationsConnection!
  }

  """
  Leaf Types are one of the easiest ways to identify trees
  See https://outforia.com/types-of-leaves/ for details
  """
  enum LeafType {
    Needle
    Lanceolate
    Palmate
    Pinnate
    Bipinnate
    Flabellate
    Cordate
    Lobed
  }

  type Location {
    latitude: Float!
    longitude: Float!

    """
    Indicates if the latitude/longitude are exact or fuzzed for privacy
    """
    exact: Boolean!
  }

  """
  Observations are user-input observations of trees. They must be
  moderated before being publicly visible. Users might not know or be able
  to see many parts of the identifying factors, so they are nullable.
  """
  type Observation {
    id: ID!

    """
    Indicates that the observation has been approved by a moderator
    """
    approved: Boolean!

    """
    Users must provide some description
    """
    description: String!
    photos: [Photo!]!

    """
    Location is not always provided by users
    """
    location: Location

    species: Species
    leafType: LeafType
  }

  type ObservationEdge {
    node: Observation!
  }

  type ObservationsConnection {
    edges: [ObservationEdge!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String
  }

  type Query {
    genera: [Genus!]!
    species: [Species!]!
    observations: [Observation]!
  }
`;
