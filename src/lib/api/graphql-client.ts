import { GraphQLClient } from "graphql-request";
import {GRAPHQL_ENDPOINT} from '$lib/env'

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);

