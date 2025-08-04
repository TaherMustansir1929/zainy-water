
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Moderator
 * 
 */
export type Moderator = $Result.DefaultSelection<Prisma.$ModeratorPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model OtherExpense
 * 
 */
export type OtherExpense = $Result.DefaultSelection<Prisma.$OtherExpensePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Area: {
  Saddar: 'Saddar',
  Clifton: 'Clifton',
  Gulshan: 'Gulshan',
  Korangi: 'Korangi',
  Malir: 'Malir',
  NorthNazimabad: 'NorthNazimabad',
  Gulistan: 'Gulistan',
  Liaquatabad: 'Liaquatabad',
  Nazimabad: 'Nazimabad'
};

export type Area = (typeof Area)[keyof typeof Area]

}

export type Area = $Enums.Area

export const Area: typeof $Enums.Area

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moderator`: Exposes CRUD operations for the **Moderator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moderators
    * const moderators = await prisma.moderator.findMany()
    * ```
    */
  get moderator(): Prisma.ModeratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherExpense`: Exposes CRUD operations for the **OtherExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherExpenses
    * const otherExpenses = await prisma.otherExpense.findMany()
    * ```
    */
  get otherExpense(): Prisma.OtherExpenseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Moderator: 'Moderator',
    Delivery: 'Delivery',
    OtherExpense: 'OtherExpense'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "moderator" | "delivery" | "otherExpense"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Moderator: {
        payload: Prisma.$ModeratorPayload<ExtArgs>
        fields: Prisma.ModeratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>
          }
          findFirst: {
            args: Prisma.ModeratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>
          }
          findMany: {
            args: Prisma.ModeratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>[]
          }
          create: {
            args: Prisma.ModeratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>
          }
          createMany: {
            args: Prisma.ModeratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModeratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>[]
          }
          delete: {
            args: Prisma.ModeratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>
          }
          update: {
            args: Prisma.ModeratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>
          }
          deleteMany: {
            args: Prisma.ModeratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModeratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModeratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>[]
          }
          upsert: {
            args: Prisma.ModeratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPayload>
          }
          aggregate: {
            args: Prisma.ModeratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModerator>
          }
          groupBy: {
            args: Prisma.ModeratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModeratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeratorCountArgs<ExtArgs>
            result: $Utils.Optional<ModeratorCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      OtherExpense: {
        payload: Prisma.$OtherExpensePayload<ExtArgs>
        fields: Prisma.OtherExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>
          }
          findFirst: {
            args: Prisma.OtherExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>
          }
          findMany: {
            args: Prisma.OtherExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>[]
          }
          create: {
            args: Prisma.OtherExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>
          }
          createMany: {
            args: Prisma.OtherExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtherExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>[]
          }
          delete: {
            args: Prisma.OtherExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>
          }
          update: {
            args: Prisma.OtherExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>
          }
          deleteMany: {
            args: Prisma.OtherExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtherExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>[]
          }
          upsert: {
            args: Prisma.OtherExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherExpensePayload>
          }
          aggregate: {
            args: Prisma.OtherExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherExpense>
          }
          groupBy: {
            args: Prisma.OtherExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<OtherExpenseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    moderator?: ModeratorOmit
    delivery?: DeliveryOmit
    otherExpense?: OtherExpenseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    deliveries: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | CustomerCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * Count Type ModeratorCountOutputType
   */

  export type ModeratorCountOutputType = {
    deliveries: number
    OtherExpense: number
  }

  export type ModeratorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | ModeratorCountOutputTypeCountDeliveriesArgs
    OtherExpense?: boolean | ModeratorCountOutputTypeCountOtherExpenseArgs
  }

  // Custom InputTypes
  /**
   * ModeratorCountOutputType without action
   */
  export type ModeratorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorCountOutputType
     */
    select?: ModeratorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModeratorCountOutputType without action
   */
  export type ModeratorCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * ModeratorCountOutputType without action
   */
  export type ModeratorCountOutputTypeCountOtherExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    bottle_price: number | null
    balance: number | null
  }

  export type CustomerSumAggregateOutputType = {
    bottle_price: number | null
    balance: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    customer_id: string | null
    name: string | null
    address: string | null
    area: $Enums.Area | null
    phone: string | null
    bottle_price: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    customer_id: string | null
    name: string | null
    address: string | null
    area: $Enums.Area | null
    phone: string | null
    bottle_price: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    customer_id: number
    name: number
    address: number
    area: number
    phone: number
    bottle_price: number
    balance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    bottle_price?: true
    balance?: true
  }

  export type CustomerSumAggregateInputType = {
    bottle_price?: true
    balance?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    customer_id?: true
    name?: true
    address?: true
    area?: true
    phone?: true
    bottle_price?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    customer_id?: true
    name?: true
    address?: true
    area?: true
    phone?: true
    bottle_price?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    customer_id?: true
    name?: true
    address?: true
    area?: true
    phone?: true
    bottle_price?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    customer_id: string
    name: string
    address: string
    area: $Enums.Area
    phone: string
    bottle_price: number
    balance: number
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    phone?: boolean
    bottle_price?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveries?: boolean | Customer$deliveriesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    phone?: boolean
    bottle_price?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    phone?: boolean
    bottle_price?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    customer_id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    phone?: boolean
    bottle_price?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "name" | "address" | "area" | "phone" | "bottle_price" | "balance" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Customer$deliveriesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customer_id: string
      name: string
      address: string
      area: $Enums.Area
      phone: string
      bottle_price: number
      balance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Customer$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly customer_id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly area: FieldRef<"Customer", 'Area'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly bottle_price: FieldRef<"Customer", 'Int'>
    readonly balance: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.deliveries
   */
  export type Customer$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Moderator
   */

  export type AggregateModerator = {
    _count: ModeratorCountAggregateOutputType | null
    _min: ModeratorMinAggregateOutputType | null
    _max: ModeratorMaxAggregateOutputType | null
  }

  export type ModeratorMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModeratorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModeratorCountAggregateOutputType = {
    id: number
    name: number
    password: number
    areas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModeratorMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModeratorMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModeratorCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    areas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModeratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moderator to aggregate.
     */
    where?: ModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderators to fetch.
     */
    orderBy?: ModeratorOrderByWithRelationInput | ModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moderators
    **/
    _count?: true | ModeratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeratorMaxAggregateInputType
  }

  export type GetModeratorAggregateType<T extends ModeratorAggregateArgs> = {
        [P in keyof T & keyof AggregateModerator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModerator[P]>
      : GetScalarType<T[P], AggregateModerator[P]>
  }




  export type ModeratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeratorWhereInput
    orderBy?: ModeratorOrderByWithAggregationInput | ModeratorOrderByWithAggregationInput[]
    by: ModeratorScalarFieldEnum[] | ModeratorScalarFieldEnum
    having?: ModeratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeratorCountAggregateInputType | true
    _min?: ModeratorMinAggregateInputType
    _max?: ModeratorMaxAggregateInputType
  }

  export type ModeratorGroupByOutputType = {
    id: string
    name: string
    password: string
    areas: $Enums.Area[]
    createdAt: Date
    updatedAt: Date
    _count: ModeratorCountAggregateOutputType | null
    _min: ModeratorMinAggregateOutputType | null
    _max: ModeratorMaxAggregateOutputType | null
  }

  type GetModeratorGroupByPayload<T extends ModeratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeratorGroupByOutputType[P]>
            : GetScalarType<T[P], ModeratorGroupByOutputType[P]>
        }
      >
    >


  export type ModeratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    areas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveries?: boolean | Moderator$deliveriesArgs<ExtArgs>
    OtherExpense?: boolean | Moderator$OtherExpenseArgs<ExtArgs>
    _count?: boolean | ModeratorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderator"]>

  export type ModeratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    areas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["moderator"]>

  export type ModeratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    areas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["moderator"]>

  export type ModeratorSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    areas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModeratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "areas" | "createdAt" | "updatedAt", ExtArgs["result"]["moderator"]>
  export type ModeratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Moderator$deliveriesArgs<ExtArgs>
    OtherExpense?: boolean | Moderator$OtherExpenseArgs<ExtArgs>
    _count?: boolean | ModeratorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModeratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModeratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModeratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Moderator"
    objects: {
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
      OtherExpense: Prisma.$OtherExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      areas: $Enums.Area[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moderator"]>
    composites: {}
  }

  type ModeratorGetPayload<S extends boolean | null | undefined | ModeratorDefaultArgs> = $Result.GetResult<Prisma.$ModeratorPayload, S>

  type ModeratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModeratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModeratorCountAggregateInputType | true
    }

  export interface ModeratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Moderator'], meta: { name: 'Moderator' } }
    /**
     * Find zero or one Moderator that matches the filter.
     * @param {ModeratorFindUniqueArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeratorFindUniqueArgs>(args: SelectSubset<T, ModeratorFindUniqueArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Moderator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeratorFindUniqueOrThrowArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeratorFindUniqueOrThrowArgs>(args: SelectSubset<T, ModeratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moderator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorFindFirstArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeratorFindFirstArgs>(args?: SelectSubset<T, ModeratorFindFirstArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moderator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorFindFirstOrThrowArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeratorFindFirstOrThrowArgs>(args?: SelectSubset<T, ModeratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moderators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moderators
     * const moderators = await prisma.moderator.findMany()
     * 
     * // Get first 10 Moderators
     * const moderators = await prisma.moderator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moderatorWithIdOnly = await prisma.moderator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModeratorFindManyArgs>(args?: SelectSubset<T, ModeratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Moderator.
     * @param {ModeratorCreateArgs} args - Arguments to create a Moderator.
     * @example
     * // Create one Moderator
     * const Moderator = await prisma.moderator.create({
     *   data: {
     *     // ... data to create a Moderator
     *   }
     * })
     * 
     */
    create<T extends ModeratorCreateArgs>(args: SelectSubset<T, ModeratorCreateArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moderators.
     * @param {ModeratorCreateManyArgs} args - Arguments to create many Moderators.
     * @example
     * // Create many Moderators
     * const moderator = await prisma.moderator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModeratorCreateManyArgs>(args?: SelectSubset<T, ModeratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moderators and returns the data saved in the database.
     * @param {ModeratorCreateManyAndReturnArgs} args - Arguments to create many Moderators.
     * @example
     * // Create many Moderators
     * const moderator = await prisma.moderator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moderators and only return the `id`
     * const moderatorWithIdOnly = await prisma.moderator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModeratorCreateManyAndReturnArgs>(args?: SelectSubset<T, ModeratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Moderator.
     * @param {ModeratorDeleteArgs} args - Arguments to delete one Moderator.
     * @example
     * // Delete one Moderator
     * const Moderator = await prisma.moderator.delete({
     *   where: {
     *     // ... filter to delete one Moderator
     *   }
     * })
     * 
     */
    delete<T extends ModeratorDeleteArgs>(args: SelectSubset<T, ModeratorDeleteArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Moderator.
     * @param {ModeratorUpdateArgs} args - Arguments to update one Moderator.
     * @example
     * // Update one Moderator
     * const moderator = await prisma.moderator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModeratorUpdateArgs>(args: SelectSubset<T, ModeratorUpdateArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moderators.
     * @param {ModeratorDeleteManyArgs} args - Arguments to filter Moderators to delete.
     * @example
     * // Delete a few Moderators
     * const { count } = await prisma.moderator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModeratorDeleteManyArgs>(args?: SelectSubset<T, ModeratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moderators
     * const moderator = await prisma.moderator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModeratorUpdateManyArgs>(args: SelectSubset<T, ModeratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moderators and returns the data updated in the database.
     * @param {ModeratorUpdateManyAndReturnArgs} args - Arguments to update many Moderators.
     * @example
     * // Update many Moderators
     * const moderator = await prisma.moderator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moderators and only return the `id`
     * const moderatorWithIdOnly = await prisma.moderator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModeratorUpdateManyAndReturnArgs>(args: SelectSubset<T, ModeratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Moderator.
     * @param {ModeratorUpsertArgs} args - Arguments to update or create a Moderator.
     * @example
     * // Update or create a Moderator
     * const moderator = await prisma.moderator.upsert({
     *   create: {
     *     // ... data to create a Moderator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moderator we want to update
     *   }
     * })
     */
    upsert<T extends ModeratorUpsertArgs>(args: SelectSubset<T, ModeratorUpsertArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorCountArgs} args - Arguments to filter Moderators to count.
     * @example
     * // Count the number of Moderators
     * const count = await prisma.moderator.count({
     *   where: {
     *     // ... the filter for the Moderators we want to count
     *   }
     * })
    **/
    count<T extends ModeratorCountArgs>(
      args?: Subset<T, ModeratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moderator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModeratorAggregateArgs>(args: Subset<T, ModeratorAggregateArgs>): Prisma.PrismaPromise<GetModeratorAggregateType<T>>

    /**
     * Group by Moderator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModeratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeratorGroupByArgs['orderBy'] }
        : { orderBy?: ModeratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModeratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Moderator model
   */
  readonly fields: ModeratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Moderator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Moderator$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Moderator$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OtherExpense<T extends Moderator$OtherExpenseArgs<ExtArgs> = {}>(args?: Subset<T, Moderator$OtherExpenseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Moderator model
   */
  interface ModeratorFieldRefs {
    readonly id: FieldRef<"Moderator", 'String'>
    readonly name: FieldRef<"Moderator", 'String'>
    readonly password: FieldRef<"Moderator", 'String'>
    readonly areas: FieldRef<"Moderator", 'Area[]'>
    readonly createdAt: FieldRef<"Moderator", 'DateTime'>
    readonly updatedAt: FieldRef<"Moderator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Moderator findUnique
   */
  export type ModeratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * Filter, which Moderator to fetch.
     */
    where: ModeratorWhereUniqueInput
  }

  /**
   * Moderator findUniqueOrThrow
   */
  export type ModeratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * Filter, which Moderator to fetch.
     */
    where: ModeratorWhereUniqueInput
  }

  /**
   * Moderator findFirst
   */
  export type ModeratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * Filter, which Moderator to fetch.
     */
    where?: ModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderators to fetch.
     */
    orderBy?: ModeratorOrderByWithRelationInput | ModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moderators.
     */
    cursor?: ModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moderators.
     */
    distinct?: ModeratorScalarFieldEnum | ModeratorScalarFieldEnum[]
  }

  /**
   * Moderator findFirstOrThrow
   */
  export type ModeratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * Filter, which Moderator to fetch.
     */
    where?: ModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderators to fetch.
     */
    orderBy?: ModeratorOrderByWithRelationInput | ModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moderators.
     */
    cursor?: ModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moderators.
     */
    distinct?: ModeratorScalarFieldEnum | ModeratorScalarFieldEnum[]
  }

  /**
   * Moderator findMany
   */
  export type ModeratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * Filter, which Moderators to fetch.
     */
    where?: ModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderators to fetch.
     */
    orderBy?: ModeratorOrderByWithRelationInput | ModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moderators.
     */
    cursor?: ModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderators.
     */
    skip?: number
    distinct?: ModeratorScalarFieldEnum | ModeratorScalarFieldEnum[]
  }

  /**
   * Moderator create
   */
  export type ModeratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Moderator.
     */
    data: XOR<ModeratorCreateInput, ModeratorUncheckedCreateInput>
  }

  /**
   * Moderator createMany
   */
  export type ModeratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moderators.
     */
    data: ModeratorCreateManyInput | ModeratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moderator createManyAndReturn
   */
  export type ModeratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * The data used to create many Moderators.
     */
    data: ModeratorCreateManyInput | ModeratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moderator update
   */
  export type ModeratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Moderator.
     */
    data: XOR<ModeratorUpdateInput, ModeratorUncheckedUpdateInput>
    /**
     * Choose, which Moderator to update.
     */
    where: ModeratorWhereUniqueInput
  }

  /**
   * Moderator updateMany
   */
  export type ModeratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moderators.
     */
    data: XOR<ModeratorUpdateManyMutationInput, ModeratorUncheckedUpdateManyInput>
    /**
     * Filter which Moderators to update
     */
    where?: ModeratorWhereInput
    /**
     * Limit how many Moderators to update.
     */
    limit?: number
  }

  /**
   * Moderator updateManyAndReturn
   */
  export type ModeratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * The data used to update Moderators.
     */
    data: XOR<ModeratorUpdateManyMutationInput, ModeratorUncheckedUpdateManyInput>
    /**
     * Filter which Moderators to update
     */
    where?: ModeratorWhereInput
    /**
     * Limit how many Moderators to update.
     */
    limit?: number
  }

  /**
   * Moderator upsert
   */
  export type ModeratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Moderator to update in case it exists.
     */
    where: ModeratorWhereUniqueInput
    /**
     * In case the Moderator found by the `where` argument doesn't exist, create a new Moderator with this data.
     */
    create: XOR<ModeratorCreateInput, ModeratorUncheckedCreateInput>
    /**
     * In case the Moderator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeratorUpdateInput, ModeratorUncheckedUpdateInput>
  }

  /**
   * Moderator delete
   */
  export type ModeratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
    /**
     * Filter which Moderator to delete.
     */
    where: ModeratorWhereUniqueInput
  }

  /**
   * Moderator deleteMany
   */
  export type ModeratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moderators to delete
     */
    where?: ModeratorWhereInput
    /**
     * Limit how many Moderators to delete.
     */
    limit?: number
  }

  /**
   * Moderator.deliveries
   */
  export type Moderator$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Moderator.OtherExpense
   */
  export type Moderator$OtherExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    where?: OtherExpenseWhereInput
    orderBy?: OtherExpenseOrderByWithRelationInput | OtherExpenseOrderByWithRelationInput[]
    cursor?: OtherExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherExpenseScalarFieldEnum | OtherExpenseScalarFieldEnum[]
  }

  /**
   * Moderator without action
   */
  export type ModeratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: ModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderator
     */
    omit?: ModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    payment: number | null
    filled_bottles: number | null
    empty_bottles: number | null
  }

  export type DeliverySumAggregateOutputType = {
    payment: number | null
    filled_bottles: number | null
    empty_bottles: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: string | null
    customer_id: string | null
    moderator_id: string | null
    delivery_date: Date | null
    payment: number | null
    filled_bottles: number | null
    empty_bottles: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: string | null
    customer_id: string | null
    moderator_id: string | null
    delivery_date: Date | null
    payment: number | null
    filled_bottles: number | null
    empty_bottles: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    customer_id: number
    moderator_id: number
    delivery_date: number
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    payment?: true
    filled_bottles?: true
    empty_bottles?: true
  }

  export type DeliverySumAggregateInputType = {
    payment?: true
    filled_bottles?: true
    empty_bottles?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    customer_id?: true
    moderator_id?: true
    delivery_date?: true
    payment?: true
    filled_bottles?: true
    empty_bottles?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    customer_id?: true
    moderator_id?: true
    delivery_date?: true
    payment?: true
    filled_bottles?: true
    empty_bottles?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    customer_id?: true
    moderator_id?: true
    delivery_date?: true
    payment?: true
    filled_bottles?: true
    empty_bottles?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: string
    customer_id: string
    moderator_id: string
    delivery_date: Date
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt: Date
    updatedAt: Date
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    moderator_id?: boolean
    delivery_date?: boolean
    payment?: boolean
    filled_bottles?: boolean
    empty_bottles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    moderator_id?: boolean
    delivery_date?: boolean
    payment?: boolean
    filled_bottles?: boolean
    empty_bottles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    moderator_id?: boolean
    delivery_date?: boolean
    payment?: boolean
    filled_bottles?: boolean
    empty_bottles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    customer_id?: boolean
    moderator_id?: boolean
    delivery_date?: boolean
    payment?: boolean
    filled_bottles?: boolean
    empty_bottles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "moderator_id" | "delivery_date" | "payment" | "filled_bottles" | "empty_bottles" | "createdAt" | "updatedAt", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      moderator: Prisma.$ModeratorPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customer_id: string
      moderator_id: string
      delivery_date: Date
      payment: number
      filled_bottles: number
      empty_bottles: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moderator<T extends ModeratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModeratorDefaultArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'String'>
    readonly customer_id: FieldRef<"Delivery", 'String'>
    readonly moderator_id: FieldRef<"Delivery", 'String'>
    readonly delivery_date: FieldRef<"Delivery", 'DateTime'>
    readonly payment: FieldRef<"Delivery", 'Int'>
    readonly filled_bottles: FieldRef<"Delivery", 'Int'>
    readonly empty_bottles: FieldRef<"Delivery", 'Int'>
    readonly createdAt: FieldRef<"Delivery", 'DateTime'>
    readonly updatedAt: FieldRef<"Delivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery updateManyAndReturn
   */
  export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model OtherExpense
   */

  export type AggregateOtherExpense = {
    _count: OtherExpenseCountAggregateOutputType | null
    _avg: OtherExpenseAvgAggregateOutputType | null
    _sum: OtherExpenseSumAggregateOutputType | null
    _min: OtherExpenseMinAggregateOutputType | null
    _max: OtherExpenseMaxAggregateOutputType | null
  }

  export type OtherExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type OtherExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type OtherExpenseMinAggregateOutputType = {
    id: string | null
    moderator_id: string | null
    amount: number | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherExpenseMaxAggregateOutputType = {
    id: string | null
    moderator_id: string | null
    amount: number | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherExpenseCountAggregateOutputType = {
    id: number
    moderator_id: number
    amount: number
    description: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtherExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type OtherExpenseSumAggregateInputType = {
    amount?: true
  }

  export type OtherExpenseMinAggregateInputType = {
    id?: true
    moderator_id?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherExpenseMaxAggregateInputType = {
    id?: true
    moderator_id?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherExpenseCountAggregateInputType = {
    id?: true
    moderator_id?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtherExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherExpense to aggregate.
     */
    where?: OtherExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherExpenses to fetch.
     */
    orderBy?: OtherExpenseOrderByWithRelationInput | OtherExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherExpenses
    **/
    _count?: true | OtherExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherExpenseMaxAggregateInputType
  }

  export type GetOtherExpenseAggregateType<T extends OtherExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherExpense[P]>
      : GetScalarType<T[P], AggregateOtherExpense[P]>
  }




  export type OtherExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherExpenseWhereInput
    orderBy?: OtherExpenseOrderByWithAggregationInput | OtherExpenseOrderByWithAggregationInput[]
    by: OtherExpenseScalarFieldEnum[] | OtherExpenseScalarFieldEnum
    having?: OtherExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherExpenseCountAggregateInputType | true
    _avg?: OtherExpenseAvgAggregateInputType
    _sum?: OtherExpenseSumAggregateInputType
    _min?: OtherExpenseMinAggregateInputType
    _max?: OtherExpenseMaxAggregateInputType
  }

  export type OtherExpenseGroupByOutputType = {
    id: string
    moderator_id: string
    amount: number
    description: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: OtherExpenseCountAggregateOutputType | null
    _avg: OtherExpenseAvgAggregateOutputType | null
    _sum: OtherExpenseSumAggregateOutputType | null
    _min: OtherExpenseMinAggregateOutputType | null
    _max: OtherExpenseMaxAggregateOutputType | null
  }

  type GetOtherExpenseGroupByPayload<T extends OtherExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], OtherExpenseGroupByOutputType[P]>
        }
      >
    >


  export type OtherExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moderator_id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherExpense"]>

  export type OtherExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moderator_id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherExpense"]>

  export type OtherExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moderator_id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherExpense"]>

  export type OtherExpenseSelectScalar = {
    id?: boolean
    moderator_id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtherExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moderator_id" | "amount" | "description" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["otherExpense"]>
  export type OtherExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
  }
  export type OtherExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
  }
  export type OtherExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderator?: boolean | ModeratorDefaultArgs<ExtArgs>
  }

  export type $OtherExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherExpense"
    objects: {
      moderator: Prisma.$ModeratorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moderator_id: string
      amount: number
      description: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otherExpense"]>
    composites: {}
  }

  type OtherExpenseGetPayload<S extends boolean | null | undefined | OtherExpenseDefaultArgs> = $Result.GetResult<Prisma.$OtherExpensePayload, S>

  type OtherExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherExpenseCountAggregateInputType | true
    }

  export interface OtherExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherExpense'], meta: { name: 'OtherExpense' } }
    /**
     * Find zero or one OtherExpense that matches the filter.
     * @param {OtherExpenseFindUniqueArgs} args - Arguments to find a OtherExpense
     * @example
     * // Get one OtherExpense
     * const otherExpense = await prisma.otherExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherExpenseFindUniqueArgs>(args: SelectSubset<T, OtherExpenseFindUniqueArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherExpense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherExpenseFindUniqueOrThrowArgs} args - Arguments to find a OtherExpense
     * @example
     * // Get one OtherExpense
     * const otherExpense = await prisma.otherExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseFindFirstArgs} args - Arguments to find a OtherExpense
     * @example
     * // Get one OtherExpense
     * const otherExpense = await prisma.otherExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherExpenseFindFirstArgs>(args?: SelectSubset<T, OtherExpenseFindFirstArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseFindFirstOrThrowArgs} args - Arguments to find a OtherExpense
     * @example
     * // Get one OtherExpense
     * const otherExpense = await prisma.otherExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherExpenses
     * const otherExpenses = await prisma.otherExpense.findMany()
     * 
     * // Get first 10 OtherExpenses
     * const otherExpenses = await prisma.otherExpense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherExpenseWithIdOnly = await prisma.otherExpense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtherExpenseFindManyArgs>(args?: SelectSubset<T, OtherExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherExpense.
     * @param {OtherExpenseCreateArgs} args - Arguments to create a OtherExpense.
     * @example
     * // Create one OtherExpense
     * const OtherExpense = await prisma.otherExpense.create({
     *   data: {
     *     // ... data to create a OtherExpense
     *   }
     * })
     * 
     */
    create<T extends OtherExpenseCreateArgs>(args: SelectSubset<T, OtherExpenseCreateArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherExpenses.
     * @param {OtherExpenseCreateManyArgs} args - Arguments to create many OtherExpenses.
     * @example
     * // Create many OtherExpenses
     * const otherExpense = await prisma.otherExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherExpenseCreateManyArgs>(args?: SelectSubset<T, OtherExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtherExpenses and returns the data saved in the database.
     * @param {OtherExpenseCreateManyAndReturnArgs} args - Arguments to create many OtherExpenses.
     * @example
     * // Create many OtherExpenses
     * const otherExpense = await prisma.otherExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtherExpenses and only return the `id`
     * const otherExpenseWithIdOnly = await prisma.otherExpense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtherExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, OtherExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtherExpense.
     * @param {OtherExpenseDeleteArgs} args - Arguments to delete one OtherExpense.
     * @example
     * // Delete one OtherExpense
     * const OtherExpense = await prisma.otherExpense.delete({
     *   where: {
     *     // ... filter to delete one OtherExpense
     *   }
     * })
     * 
     */
    delete<T extends OtherExpenseDeleteArgs>(args: SelectSubset<T, OtherExpenseDeleteArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherExpense.
     * @param {OtherExpenseUpdateArgs} args - Arguments to update one OtherExpense.
     * @example
     * // Update one OtherExpense
     * const otherExpense = await prisma.otherExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherExpenseUpdateArgs>(args: SelectSubset<T, OtherExpenseUpdateArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherExpenses.
     * @param {OtherExpenseDeleteManyArgs} args - Arguments to filter OtherExpenses to delete.
     * @example
     * // Delete a few OtherExpenses
     * const { count } = await prisma.otherExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherExpenseDeleteManyArgs>(args?: SelectSubset<T, OtherExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherExpenses
     * const otherExpense = await prisma.otherExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherExpenseUpdateManyArgs>(args: SelectSubset<T, OtherExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherExpenses and returns the data updated in the database.
     * @param {OtherExpenseUpdateManyAndReturnArgs} args - Arguments to update many OtherExpenses.
     * @example
     * // Update many OtherExpenses
     * const otherExpense = await prisma.otherExpense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtherExpenses and only return the `id`
     * const otherExpenseWithIdOnly = await prisma.otherExpense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtherExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, OtherExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtherExpense.
     * @param {OtherExpenseUpsertArgs} args - Arguments to update or create a OtherExpense.
     * @example
     * // Update or create a OtherExpense
     * const otherExpense = await prisma.otherExpense.upsert({
     *   create: {
     *     // ... data to create a OtherExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherExpense we want to update
     *   }
     * })
     */
    upsert<T extends OtherExpenseUpsertArgs>(args: SelectSubset<T, OtherExpenseUpsertArgs<ExtArgs>>): Prisma__OtherExpenseClient<$Result.GetResult<Prisma.$OtherExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseCountArgs} args - Arguments to filter OtherExpenses to count.
     * @example
     * // Count the number of OtherExpenses
     * const count = await prisma.otherExpense.count({
     *   where: {
     *     // ... the filter for the OtherExpenses we want to count
     *   }
     * })
    **/
    count<T extends OtherExpenseCountArgs>(
      args?: Subset<T, OtherExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtherExpenseAggregateArgs>(args: Subset<T, OtherExpenseAggregateArgs>): Prisma.PrismaPromise<GetOtherExpenseAggregateType<T>>

    /**
     * Group by OtherExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtherExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherExpenseGroupByArgs['orderBy'] }
        : { orderBy?: OtherExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtherExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherExpense model
   */
  readonly fields: OtherExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moderator<T extends ModeratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModeratorDefaultArgs<ExtArgs>>): Prisma__ModeratorClient<$Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtherExpense model
   */
  interface OtherExpenseFieldRefs {
    readonly id: FieldRef<"OtherExpense", 'String'>
    readonly moderator_id: FieldRef<"OtherExpense", 'String'>
    readonly amount: FieldRef<"OtherExpense", 'Int'>
    readonly description: FieldRef<"OtherExpense", 'String'>
    readonly date: FieldRef<"OtherExpense", 'DateTime'>
    readonly createdAt: FieldRef<"OtherExpense", 'DateTime'>
    readonly updatedAt: FieldRef<"OtherExpense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtherExpense findUnique
   */
  export type OtherExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * Filter, which OtherExpense to fetch.
     */
    where: OtherExpenseWhereUniqueInput
  }

  /**
   * OtherExpense findUniqueOrThrow
   */
  export type OtherExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * Filter, which OtherExpense to fetch.
     */
    where: OtherExpenseWhereUniqueInput
  }

  /**
   * OtherExpense findFirst
   */
  export type OtherExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * Filter, which OtherExpense to fetch.
     */
    where?: OtherExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherExpenses to fetch.
     */
    orderBy?: OtherExpenseOrderByWithRelationInput | OtherExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherExpenses.
     */
    cursor?: OtherExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherExpenses.
     */
    distinct?: OtherExpenseScalarFieldEnum | OtherExpenseScalarFieldEnum[]
  }

  /**
   * OtherExpense findFirstOrThrow
   */
  export type OtherExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * Filter, which OtherExpense to fetch.
     */
    where?: OtherExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherExpenses to fetch.
     */
    orderBy?: OtherExpenseOrderByWithRelationInput | OtherExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherExpenses.
     */
    cursor?: OtherExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherExpenses.
     */
    distinct?: OtherExpenseScalarFieldEnum | OtherExpenseScalarFieldEnum[]
  }

  /**
   * OtherExpense findMany
   */
  export type OtherExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * Filter, which OtherExpenses to fetch.
     */
    where?: OtherExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherExpenses to fetch.
     */
    orderBy?: OtherExpenseOrderByWithRelationInput | OtherExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherExpenses.
     */
    cursor?: OtherExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherExpenses.
     */
    skip?: number
    distinct?: OtherExpenseScalarFieldEnum | OtherExpenseScalarFieldEnum[]
  }

  /**
   * OtherExpense create
   */
  export type OtherExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherExpense.
     */
    data: XOR<OtherExpenseCreateInput, OtherExpenseUncheckedCreateInput>
  }

  /**
   * OtherExpense createMany
   */
  export type OtherExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherExpenses.
     */
    data: OtherExpenseCreateManyInput | OtherExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherExpense createManyAndReturn
   */
  export type OtherExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many OtherExpenses.
     */
    data: OtherExpenseCreateManyInput | OtherExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtherExpense update
   */
  export type OtherExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherExpense.
     */
    data: XOR<OtherExpenseUpdateInput, OtherExpenseUncheckedUpdateInput>
    /**
     * Choose, which OtherExpense to update.
     */
    where: OtherExpenseWhereUniqueInput
  }

  /**
   * OtherExpense updateMany
   */
  export type OtherExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherExpenses.
     */
    data: XOR<OtherExpenseUpdateManyMutationInput, OtherExpenseUncheckedUpdateManyInput>
    /**
     * Filter which OtherExpenses to update
     */
    where?: OtherExpenseWhereInput
    /**
     * Limit how many OtherExpenses to update.
     */
    limit?: number
  }

  /**
   * OtherExpense updateManyAndReturn
   */
  export type OtherExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * The data used to update OtherExpenses.
     */
    data: XOR<OtherExpenseUpdateManyMutationInput, OtherExpenseUncheckedUpdateManyInput>
    /**
     * Filter which OtherExpenses to update
     */
    where?: OtherExpenseWhereInput
    /**
     * Limit how many OtherExpenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtherExpense upsert
   */
  export type OtherExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherExpense to update in case it exists.
     */
    where: OtherExpenseWhereUniqueInput
    /**
     * In case the OtherExpense found by the `where` argument doesn't exist, create a new OtherExpense with this data.
     */
    create: XOR<OtherExpenseCreateInput, OtherExpenseUncheckedCreateInput>
    /**
     * In case the OtherExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherExpenseUpdateInput, OtherExpenseUncheckedUpdateInput>
  }

  /**
   * OtherExpense delete
   */
  export type OtherExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
    /**
     * Filter which OtherExpense to delete.
     */
    where: OtherExpenseWhereUniqueInput
  }

  /**
   * OtherExpense deleteMany
   */
  export type OtherExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherExpenses to delete
     */
    where?: OtherExpenseWhereInput
    /**
     * Limit how many OtherExpenses to delete.
     */
    limit?: number
  }

  /**
   * OtherExpense without action
   */
  export type OtherExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherExpense
     */
    select?: OtherExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherExpense
     */
    omit?: OtherExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherExpenseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    name: 'name',
    address: 'address',
    area: 'area',
    phone: 'phone',
    bottle_price: 'bottle_price',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ModeratorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    areas: 'areas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModeratorScalarFieldEnum = (typeof ModeratorScalarFieldEnum)[keyof typeof ModeratorScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    moderator_id: 'moderator_id',
    delivery_date: 'delivery_date',
    payment: 'payment',
    filled_bottles: 'filled_bottles',
    empty_bottles: 'empty_bottles',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const OtherExpenseScalarFieldEnum: {
    id: 'id',
    moderator_id: 'moderator_id',
    amount: 'amount',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtherExpenseScalarFieldEnum = (typeof OtherExpenseScalarFieldEnum)[keyof typeof OtherExpenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Area'
   */
  export type EnumAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Area'>
    


  /**
   * Reference to a field of type 'Area[]'
   */
  export type ListEnumAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Area[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    customer_id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    area?: EnumAreaFilter<"Customer"> | $Enums.Area
    phone?: StringFilter<"Customer"> | string
    bottle_price?: IntFilter<"Customer"> | number
    balance?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    deliveries?: DeliveryListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    phone?: SortOrder
    bottle_price?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveries?: DeliveryOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customer_id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    area?: EnumAreaFilter<"Customer"> | $Enums.Area
    phone?: StringFilter<"Customer"> | string
    bottle_price?: IntFilter<"Customer"> | number
    balance?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    deliveries?: DeliveryListRelationFilter
  }, "id" | "customer_id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    phone?: SortOrder
    bottle_price?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    customer_id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    area?: EnumAreaWithAggregatesFilter<"Customer"> | $Enums.Area
    phone?: StringWithAggregatesFilter<"Customer"> | string
    bottle_price?: IntWithAggregatesFilter<"Customer"> | number
    balance?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ModeratorWhereInput = {
    AND?: ModeratorWhereInput | ModeratorWhereInput[]
    OR?: ModeratorWhereInput[]
    NOT?: ModeratorWhereInput | ModeratorWhereInput[]
    id?: StringFilter<"Moderator"> | string
    name?: StringFilter<"Moderator"> | string
    password?: StringFilter<"Moderator"> | string
    areas?: EnumAreaNullableListFilter<"Moderator">
    createdAt?: DateTimeFilter<"Moderator"> | Date | string
    updatedAt?: DateTimeFilter<"Moderator"> | Date | string
    deliveries?: DeliveryListRelationFilter
    OtherExpense?: OtherExpenseListRelationFilter
  }

  export type ModeratorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    areas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveries?: DeliveryOrderByRelationAggregateInput
    OtherExpense?: OtherExpenseOrderByRelationAggregateInput
  }

  export type ModeratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ModeratorWhereInput | ModeratorWhereInput[]
    OR?: ModeratorWhereInput[]
    NOT?: ModeratorWhereInput | ModeratorWhereInput[]
    password?: StringFilter<"Moderator"> | string
    areas?: EnumAreaNullableListFilter<"Moderator">
    createdAt?: DateTimeFilter<"Moderator"> | Date | string
    updatedAt?: DateTimeFilter<"Moderator"> | Date | string
    deliveries?: DeliveryListRelationFilter
    OtherExpense?: OtherExpenseListRelationFilter
  }, "id" | "name">

  export type ModeratorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    areas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModeratorCountOrderByAggregateInput
    _max?: ModeratorMaxOrderByAggregateInput
    _min?: ModeratorMinOrderByAggregateInput
  }

  export type ModeratorScalarWhereWithAggregatesInput = {
    AND?: ModeratorScalarWhereWithAggregatesInput | ModeratorScalarWhereWithAggregatesInput[]
    OR?: ModeratorScalarWhereWithAggregatesInput[]
    NOT?: ModeratorScalarWhereWithAggregatesInput | ModeratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Moderator"> | string
    name?: StringWithAggregatesFilter<"Moderator"> | string
    password?: StringWithAggregatesFilter<"Moderator"> | string
    areas?: EnumAreaNullableListFilter<"Moderator">
    createdAt?: DateTimeWithAggregatesFilter<"Moderator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Moderator"> | Date | string
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: StringFilter<"Delivery"> | string
    customer_id?: StringFilter<"Delivery"> | string
    moderator_id?: StringFilter<"Delivery"> | string
    delivery_date?: DateTimeFilter<"Delivery"> | Date | string
    payment?: IntFilter<"Delivery"> | number
    filled_bottles?: IntFilter<"Delivery"> | number
    empty_bottles?: IntFilter<"Delivery"> | number
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    moderator?: XOR<ModeratorScalarRelationFilter, ModeratorWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    moderator_id?: SortOrder
    delivery_date?: SortOrder
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moderator?: ModeratorOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    customer_id?: StringFilter<"Delivery"> | string
    moderator_id?: StringFilter<"Delivery"> | string
    delivery_date?: DateTimeFilter<"Delivery"> | Date | string
    payment?: IntFilter<"Delivery"> | number
    filled_bottles?: IntFilter<"Delivery"> | number
    empty_bottles?: IntFilter<"Delivery"> | number
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    moderator?: XOR<ModeratorScalarRelationFilter, ModeratorWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    moderator_id?: SortOrder
    delivery_date?: SortOrder
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delivery"> | string
    customer_id?: StringWithAggregatesFilter<"Delivery"> | string
    moderator_id?: StringWithAggregatesFilter<"Delivery"> | string
    delivery_date?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    payment?: IntWithAggregatesFilter<"Delivery"> | number
    filled_bottles?: IntWithAggregatesFilter<"Delivery"> | number
    empty_bottles?: IntWithAggregatesFilter<"Delivery"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
  }

  export type OtherExpenseWhereInput = {
    AND?: OtherExpenseWhereInput | OtherExpenseWhereInput[]
    OR?: OtherExpenseWhereInput[]
    NOT?: OtherExpenseWhereInput | OtherExpenseWhereInput[]
    id?: StringFilter<"OtherExpense"> | string
    moderator_id?: StringFilter<"OtherExpense"> | string
    amount?: IntFilter<"OtherExpense"> | number
    description?: StringFilter<"OtherExpense"> | string
    date?: DateTimeFilter<"OtherExpense"> | Date | string
    createdAt?: DateTimeFilter<"OtherExpense"> | Date | string
    updatedAt?: DateTimeFilter<"OtherExpense"> | Date | string
    moderator?: XOR<ModeratorScalarRelationFilter, ModeratorWhereInput>
  }

  export type OtherExpenseOrderByWithRelationInput = {
    id?: SortOrder
    moderator_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moderator?: ModeratorOrderByWithRelationInput
  }

  export type OtherExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtherExpenseWhereInput | OtherExpenseWhereInput[]
    OR?: OtherExpenseWhereInput[]
    NOT?: OtherExpenseWhereInput | OtherExpenseWhereInput[]
    moderator_id?: StringFilter<"OtherExpense"> | string
    amount?: IntFilter<"OtherExpense"> | number
    description?: StringFilter<"OtherExpense"> | string
    date?: DateTimeFilter<"OtherExpense"> | Date | string
    createdAt?: DateTimeFilter<"OtherExpense"> | Date | string
    updatedAt?: DateTimeFilter<"OtherExpense"> | Date | string
    moderator?: XOR<ModeratorScalarRelationFilter, ModeratorWhereInput>
  }, "id">

  export type OtherExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    moderator_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtherExpenseCountOrderByAggregateInput
    _avg?: OtherExpenseAvgOrderByAggregateInput
    _max?: OtherExpenseMaxOrderByAggregateInput
    _min?: OtherExpenseMinOrderByAggregateInput
    _sum?: OtherExpenseSumOrderByAggregateInput
  }

  export type OtherExpenseScalarWhereWithAggregatesInput = {
    AND?: OtherExpenseScalarWhereWithAggregatesInput | OtherExpenseScalarWhereWithAggregatesInput[]
    OR?: OtherExpenseScalarWhereWithAggregatesInput[]
    NOT?: OtherExpenseScalarWhereWithAggregatesInput | OtherExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtherExpense"> | string
    moderator_id?: StringWithAggregatesFilter<"OtherExpense"> | string
    amount?: IntWithAggregatesFilter<"OtherExpense"> | number
    description?: StringWithAggregatesFilter<"OtherExpense"> | string
    date?: DateTimeWithAggregatesFilter<"OtherExpense"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OtherExpense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OtherExpense"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    customer_id: string
    name: string
    address: string
    area: $Enums.Area
    phone: string
    bottle_price: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    customer_id: string
    name: string
    address: string
    area: $Enums.Area
    phone: string
    bottle_price: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: EnumAreaFieldUpdateOperationsInput | $Enums.Area
    phone?: StringFieldUpdateOperationsInput | string
    bottle_price?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: EnumAreaFieldUpdateOperationsInput | $Enums.Area
    phone?: StringFieldUpdateOperationsInput | string
    bottle_price?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    customer_id: string
    name: string
    address: string
    area: $Enums.Area
    phone: string
    bottle_price: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: EnumAreaFieldUpdateOperationsInput | $Enums.Area
    phone?: StringFieldUpdateOperationsInput | string
    bottle_price?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: EnumAreaFieldUpdateOperationsInput | $Enums.Area
    phone?: StringFieldUpdateOperationsInput | string
    bottle_price?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorCreateInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryCreateNestedManyWithoutModeratorInput
    OtherExpense?: OtherExpenseCreateNestedManyWithoutModeratorInput
  }

  export type ModeratorUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutModeratorInput
    OtherExpense?: OtherExpenseUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type ModeratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUpdateManyWithoutModeratorNestedInput
    OtherExpense?: OtherExpenseUpdateManyWithoutModeratorNestedInput
  }

  export type ModeratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutModeratorNestedInput
    OtherExpense?: OtherExpenseUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type ModeratorCreateManyInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModeratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateInput = {
    id?: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
    moderator: ModeratorCreateNestedOneWithoutDeliveriesInput
    customer: CustomerCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: string
    customer_id: string
    moderator_id: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderator?: ModeratorUpdateOneRequiredWithoutDeliveriesNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    moderator_id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyInput = {
    id?: string
    customer_id: string
    moderator_id: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    moderator_id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherExpenseCreateInput = {
    id?: string
    amount: number
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderator: ModeratorCreateNestedOneWithoutOtherExpenseInput
  }

  export type OtherExpenseUncheckedCreateInput = {
    id?: string
    moderator_id: string
    amount: number
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderator?: ModeratorUpdateOneRequiredWithoutOtherExpenseNestedInput
  }

  export type OtherExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moderator_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherExpenseCreateManyInput = {
    id?: string
    moderator_id: string
    amount: number
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moderator_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.Area | EnumAreaFieldRefInput<$PrismaModel>
    in?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaFilter<$PrismaModel> | $Enums.Area
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    phone?: SortOrder
    bottle_price?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    bottle_price?: SortOrder
    balance?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    phone?: SortOrder
    bottle_price?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    phone?: SortOrder
    bottle_price?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    bottle_price?: SortOrder
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Area | EnumAreaFieldRefInput<$PrismaModel>
    in?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaWithAggregatesFilter<$PrismaModel> | $Enums.Area
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAreaFilter<$PrismaModel>
    _max?: NestedEnumAreaFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAreaNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel> | null
    has?: $Enums.Area | EnumAreaFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OtherExpenseListRelationFilter = {
    every?: OtherExpenseWhereInput
    some?: OtherExpenseWhereInput
    none?: OtherExpenseWhereInput
  }

  export type OtherExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModeratorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    areas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModeratorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModeratorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModeratorScalarRelationFilter = {
    is?: ModeratorWhereInput
    isNot?: ModeratorWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    moderator_id?: SortOrder
    delivery_date?: SortOrder
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    moderator_id?: SortOrder
    delivery_date?: SortOrder
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    moderator_id?: SortOrder
    delivery_date?: SortOrder
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    payment?: SortOrder
    filled_bottles?: SortOrder
    empty_bottles?: SortOrder
  }

  export type OtherExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    moderator_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OtherExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    moderator_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    moderator_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DeliveryCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DeliveryCreateWithoutCustomerInput, DeliveryUncheckedCreateWithoutCustomerInput> | DeliveryCreateWithoutCustomerInput[] | DeliveryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutCustomerInput | DeliveryCreateOrConnectWithoutCustomerInput[]
    createMany?: DeliveryCreateManyCustomerInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DeliveryCreateWithoutCustomerInput, DeliveryUncheckedCreateWithoutCustomerInput> | DeliveryCreateWithoutCustomerInput[] | DeliveryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutCustomerInput | DeliveryCreateOrConnectWithoutCustomerInput[]
    createMany?: DeliveryCreateManyCustomerInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAreaFieldUpdateOperationsInput = {
    set?: $Enums.Area
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeliveryUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DeliveryCreateWithoutCustomerInput, DeliveryUncheckedCreateWithoutCustomerInput> | DeliveryCreateWithoutCustomerInput[] | DeliveryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutCustomerInput | DeliveryCreateOrConnectWithoutCustomerInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutCustomerInput | DeliveryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DeliveryCreateManyCustomerInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutCustomerInput | DeliveryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutCustomerInput | DeliveryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DeliveryCreateWithoutCustomerInput, DeliveryUncheckedCreateWithoutCustomerInput> | DeliveryCreateWithoutCustomerInput[] | DeliveryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutCustomerInput | DeliveryCreateOrConnectWithoutCustomerInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutCustomerInput | DeliveryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DeliveryCreateManyCustomerInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutCustomerInput | DeliveryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutCustomerInput | DeliveryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ModeratorCreateareasInput = {
    set: $Enums.Area[]
  }

  export type DeliveryCreateNestedManyWithoutModeratorInput = {
    create?: XOR<DeliveryCreateWithoutModeratorInput, DeliveryUncheckedCreateWithoutModeratorInput> | DeliveryCreateWithoutModeratorInput[] | DeliveryUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutModeratorInput | DeliveryCreateOrConnectWithoutModeratorInput[]
    createMany?: DeliveryCreateManyModeratorInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type OtherExpenseCreateNestedManyWithoutModeratorInput = {
    create?: XOR<OtherExpenseCreateWithoutModeratorInput, OtherExpenseUncheckedCreateWithoutModeratorInput> | OtherExpenseCreateWithoutModeratorInput[] | OtherExpenseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: OtherExpenseCreateOrConnectWithoutModeratorInput | OtherExpenseCreateOrConnectWithoutModeratorInput[]
    createMany?: OtherExpenseCreateManyModeratorInputEnvelope
    connect?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutModeratorInput = {
    create?: XOR<DeliveryCreateWithoutModeratorInput, DeliveryUncheckedCreateWithoutModeratorInput> | DeliveryCreateWithoutModeratorInput[] | DeliveryUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutModeratorInput | DeliveryCreateOrConnectWithoutModeratorInput[]
    createMany?: DeliveryCreateManyModeratorInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type OtherExpenseUncheckedCreateNestedManyWithoutModeratorInput = {
    create?: XOR<OtherExpenseCreateWithoutModeratorInput, OtherExpenseUncheckedCreateWithoutModeratorInput> | OtherExpenseCreateWithoutModeratorInput[] | OtherExpenseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: OtherExpenseCreateOrConnectWithoutModeratorInput | OtherExpenseCreateOrConnectWithoutModeratorInput[]
    createMany?: OtherExpenseCreateManyModeratorInputEnvelope
    connect?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
  }

  export type ModeratorUpdateareasInput = {
    set?: $Enums.Area[]
    push?: $Enums.Area | $Enums.Area[]
  }

  export type DeliveryUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<DeliveryCreateWithoutModeratorInput, DeliveryUncheckedCreateWithoutModeratorInput> | DeliveryCreateWithoutModeratorInput[] | DeliveryUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutModeratorInput | DeliveryCreateOrConnectWithoutModeratorInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutModeratorInput | DeliveryUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: DeliveryCreateManyModeratorInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutModeratorInput | DeliveryUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutModeratorInput | DeliveryUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type OtherExpenseUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<OtherExpenseCreateWithoutModeratorInput, OtherExpenseUncheckedCreateWithoutModeratorInput> | OtherExpenseCreateWithoutModeratorInput[] | OtherExpenseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: OtherExpenseCreateOrConnectWithoutModeratorInput | OtherExpenseCreateOrConnectWithoutModeratorInput[]
    upsert?: OtherExpenseUpsertWithWhereUniqueWithoutModeratorInput | OtherExpenseUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: OtherExpenseCreateManyModeratorInputEnvelope
    set?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    disconnect?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    delete?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    connect?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    update?: OtherExpenseUpdateWithWhereUniqueWithoutModeratorInput | OtherExpenseUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: OtherExpenseUpdateManyWithWhereWithoutModeratorInput | OtherExpenseUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: OtherExpenseScalarWhereInput | OtherExpenseScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<DeliveryCreateWithoutModeratorInput, DeliveryUncheckedCreateWithoutModeratorInput> | DeliveryCreateWithoutModeratorInput[] | DeliveryUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutModeratorInput | DeliveryCreateOrConnectWithoutModeratorInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutModeratorInput | DeliveryUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: DeliveryCreateManyModeratorInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutModeratorInput | DeliveryUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutModeratorInput | DeliveryUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type OtherExpenseUncheckedUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<OtherExpenseCreateWithoutModeratorInput, OtherExpenseUncheckedCreateWithoutModeratorInput> | OtherExpenseCreateWithoutModeratorInput[] | OtherExpenseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: OtherExpenseCreateOrConnectWithoutModeratorInput | OtherExpenseCreateOrConnectWithoutModeratorInput[]
    upsert?: OtherExpenseUpsertWithWhereUniqueWithoutModeratorInput | OtherExpenseUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: OtherExpenseCreateManyModeratorInputEnvelope
    set?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    disconnect?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    delete?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    connect?: OtherExpenseWhereUniqueInput | OtherExpenseWhereUniqueInput[]
    update?: OtherExpenseUpdateWithWhereUniqueWithoutModeratorInput | OtherExpenseUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: OtherExpenseUpdateManyWithWhereWithoutModeratorInput | OtherExpenseUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: OtherExpenseScalarWhereInput | OtherExpenseScalarWhereInput[]
  }

  export type ModeratorCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<ModeratorCreateWithoutDeliveriesInput, ModeratorUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ModeratorCreateOrConnectWithoutDeliveriesInput
    connect?: ModeratorWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<CustomerCreateWithoutDeliveriesInput, CustomerUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDeliveriesInput
    connect?: CustomerWhereUniqueInput
  }

  export type ModeratorUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<ModeratorCreateWithoutDeliveriesInput, ModeratorUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ModeratorCreateOrConnectWithoutDeliveriesInput
    upsert?: ModeratorUpsertWithoutDeliveriesInput
    connect?: ModeratorWhereUniqueInput
    update?: XOR<XOR<ModeratorUpdateToOneWithWhereWithoutDeliveriesInput, ModeratorUpdateWithoutDeliveriesInput>, ModeratorUncheckedUpdateWithoutDeliveriesInput>
  }

  export type CustomerUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<CustomerCreateWithoutDeliveriesInput, CustomerUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDeliveriesInput
    upsert?: CustomerUpsertWithoutDeliveriesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDeliveriesInput, CustomerUpdateWithoutDeliveriesInput>, CustomerUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ModeratorCreateNestedOneWithoutOtherExpenseInput = {
    create?: XOR<ModeratorCreateWithoutOtherExpenseInput, ModeratorUncheckedCreateWithoutOtherExpenseInput>
    connectOrCreate?: ModeratorCreateOrConnectWithoutOtherExpenseInput
    connect?: ModeratorWhereUniqueInput
  }

  export type ModeratorUpdateOneRequiredWithoutOtherExpenseNestedInput = {
    create?: XOR<ModeratorCreateWithoutOtherExpenseInput, ModeratorUncheckedCreateWithoutOtherExpenseInput>
    connectOrCreate?: ModeratorCreateOrConnectWithoutOtherExpenseInput
    upsert?: ModeratorUpsertWithoutOtherExpenseInput
    connect?: ModeratorWhereUniqueInput
    update?: XOR<XOR<ModeratorUpdateToOneWithWhereWithoutOtherExpenseInput, ModeratorUpdateWithoutOtherExpenseInput>, ModeratorUncheckedUpdateWithoutOtherExpenseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.Area | EnumAreaFieldRefInput<$PrismaModel>
    in?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaFilter<$PrismaModel> | $Enums.Area
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Area | EnumAreaFieldRefInput<$PrismaModel>
    in?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Area[] | ListEnumAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaWithAggregatesFilter<$PrismaModel> | $Enums.Area
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAreaFilter<$PrismaModel>
    _max?: NestedEnumAreaFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeliveryCreateWithoutCustomerInput = {
    id?: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
    moderator: ModeratorCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateWithoutCustomerInput = {
    id?: string
    moderator_id: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryCreateOrConnectWithoutCustomerInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutCustomerInput, DeliveryUncheckedCreateWithoutCustomerInput>
  }

  export type DeliveryCreateManyCustomerInputEnvelope = {
    data: DeliveryCreateManyCustomerInput | DeliveryCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutCustomerInput, DeliveryUncheckedUpdateWithoutCustomerInput>
    create: XOR<DeliveryCreateWithoutCustomerInput, DeliveryUncheckedCreateWithoutCustomerInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutCustomerInput, DeliveryUncheckedUpdateWithoutCustomerInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutCustomerInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutCustomerInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: StringFilter<"Delivery"> | string
    customer_id?: StringFilter<"Delivery"> | string
    moderator_id?: StringFilter<"Delivery"> | string
    delivery_date?: DateTimeFilter<"Delivery"> | Date | string
    payment?: IntFilter<"Delivery"> | number
    filled_bottles?: IntFilter<"Delivery"> | number
    empty_bottles?: IntFilter<"Delivery"> | number
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
  }

  export type DeliveryCreateWithoutModeratorInput = {
    id?: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateWithoutModeratorInput = {
    id?: string
    customer_id: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryCreateOrConnectWithoutModeratorInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutModeratorInput, DeliveryUncheckedCreateWithoutModeratorInput>
  }

  export type DeliveryCreateManyModeratorInputEnvelope = {
    data: DeliveryCreateManyModeratorInput | DeliveryCreateManyModeratorInput[]
    skipDuplicates?: boolean
  }

  export type OtherExpenseCreateWithoutModeratorInput = {
    id?: string
    amount: number
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherExpenseUncheckedCreateWithoutModeratorInput = {
    id?: string
    amount: number
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherExpenseCreateOrConnectWithoutModeratorInput = {
    where: OtherExpenseWhereUniqueInput
    create: XOR<OtherExpenseCreateWithoutModeratorInput, OtherExpenseUncheckedCreateWithoutModeratorInput>
  }

  export type OtherExpenseCreateManyModeratorInputEnvelope = {
    data: OtherExpenseCreateManyModeratorInput | OtherExpenseCreateManyModeratorInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutModeratorInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutModeratorInput, DeliveryUncheckedUpdateWithoutModeratorInput>
    create: XOR<DeliveryCreateWithoutModeratorInput, DeliveryUncheckedCreateWithoutModeratorInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutModeratorInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutModeratorInput, DeliveryUncheckedUpdateWithoutModeratorInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutModeratorInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutModeratorInput>
  }

  export type OtherExpenseUpsertWithWhereUniqueWithoutModeratorInput = {
    where: OtherExpenseWhereUniqueInput
    update: XOR<OtherExpenseUpdateWithoutModeratorInput, OtherExpenseUncheckedUpdateWithoutModeratorInput>
    create: XOR<OtherExpenseCreateWithoutModeratorInput, OtherExpenseUncheckedCreateWithoutModeratorInput>
  }

  export type OtherExpenseUpdateWithWhereUniqueWithoutModeratorInput = {
    where: OtherExpenseWhereUniqueInput
    data: XOR<OtherExpenseUpdateWithoutModeratorInput, OtherExpenseUncheckedUpdateWithoutModeratorInput>
  }

  export type OtherExpenseUpdateManyWithWhereWithoutModeratorInput = {
    where: OtherExpenseScalarWhereInput
    data: XOR<OtherExpenseUpdateManyMutationInput, OtherExpenseUncheckedUpdateManyWithoutModeratorInput>
  }

  export type OtherExpenseScalarWhereInput = {
    AND?: OtherExpenseScalarWhereInput | OtherExpenseScalarWhereInput[]
    OR?: OtherExpenseScalarWhereInput[]
    NOT?: OtherExpenseScalarWhereInput | OtherExpenseScalarWhereInput[]
    id?: StringFilter<"OtherExpense"> | string
    moderator_id?: StringFilter<"OtherExpense"> | string
    amount?: IntFilter<"OtherExpense"> | number
    description?: StringFilter<"OtherExpense"> | string
    date?: DateTimeFilter<"OtherExpense"> | Date | string
    createdAt?: DateTimeFilter<"OtherExpense"> | Date | string
    updatedAt?: DateTimeFilter<"OtherExpense"> | Date | string
  }

  export type ModeratorCreateWithoutDeliveriesInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
    OtherExpense?: OtherExpenseCreateNestedManyWithoutModeratorInput
  }

  export type ModeratorUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
    OtherExpense?: OtherExpenseUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type ModeratorCreateOrConnectWithoutDeliveriesInput = {
    where: ModeratorWhereUniqueInput
    create: XOR<ModeratorCreateWithoutDeliveriesInput, ModeratorUncheckedCreateWithoutDeliveriesInput>
  }

  export type CustomerCreateWithoutDeliveriesInput = {
    id?: string
    customer_id: string
    name: string
    address: string
    area: $Enums.Area
    phone: string
    bottle_price: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    customer_id: string
    name: string
    address: string
    area: $Enums.Area
    phone: string
    bottle_price: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutDeliveriesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDeliveriesInput, CustomerUncheckedCreateWithoutDeliveriesInput>
  }

  export type ModeratorUpsertWithoutDeliveriesInput = {
    update: XOR<ModeratorUpdateWithoutDeliveriesInput, ModeratorUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<ModeratorCreateWithoutDeliveriesInput, ModeratorUncheckedCreateWithoutDeliveriesInput>
    where?: ModeratorWhereInput
  }

  export type ModeratorUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: ModeratorWhereInput
    data: XOR<ModeratorUpdateWithoutDeliveriesInput, ModeratorUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ModeratorUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OtherExpense?: OtherExpenseUpdateManyWithoutModeratorNestedInput
  }

  export type ModeratorUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OtherExpense?: OtherExpenseUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type CustomerUpsertWithoutDeliveriesInput = {
    update: XOR<CustomerUpdateWithoutDeliveriesInput, CustomerUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<CustomerCreateWithoutDeliveriesInput, CustomerUncheckedCreateWithoutDeliveriesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDeliveriesInput, CustomerUncheckedUpdateWithoutDeliveriesInput>
  }

  export type CustomerUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: EnumAreaFieldUpdateOperationsInput | $Enums.Area
    phone?: StringFieldUpdateOperationsInput | string
    bottle_price?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: EnumAreaFieldUpdateOperationsInput | $Enums.Area
    phone?: StringFieldUpdateOperationsInput | string
    bottle_price?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorCreateWithoutOtherExpenseInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryCreateNestedManyWithoutModeratorInput
  }

  export type ModeratorUncheckedCreateWithoutOtherExpenseInput = {
    id?: string
    name: string
    password: string
    areas?: ModeratorCreateareasInput | $Enums.Area[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type ModeratorCreateOrConnectWithoutOtherExpenseInput = {
    where: ModeratorWhereUniqueInput
    create: XOR<ModeratorCreateWithoutOtherExpenseInput, ModeratorUncheckedCreateWithoutOtherExpenseInput>
  }

  export type ModeratorUpsertWithoutOtherExpenseInput = {
    update: XOR<ModeratorUpdateWithoutOtherExpenseInput, ModeratorUncheckedUpdateWithoutOtherExpenseInput>
    create: XOR<ModeratorCreateWithoutOtherExpenseInput, ModeratorUncheckedCreateWithoutOtherExpenseInput>
    where?: ModeratorWhereInput
  }

  export type ModeratorUpdateToOneWithWhereWithoutOtherExpenseInput = {
    where?: ModeratorWhereInput
    data: XOR<ModeratorUpdateWithoutOtherExpenseInput, ModeratorUncheckedUpdateWithoutOtherExpenseInput>
  }

  export type ModeratorUpdateWithoutOtherExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUpdateManyWithoutModeratorNestedInput
  }

  export type ModeratorUncheckedUpdateWithoutOtherExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areas?: ModeratorUpdateareasInput | $Enums.Area[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type DeliveryCreateManyCustomerInput = {
    id?: string
    moderator_id: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderator?: ModeratorUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    moderator_id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    moderator_id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyModeratorInput = {
    id?: string
    customer_id: string
    delivery_date: Date | string
    payment: number
    filled_bottles: number
    empty_bottles: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherExpenseCreateManyModeratorInput = {
    id?: string
    amount: number
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: IntFieldUpdateOperationsInput | number
    filled_bottles?: IntFieldUpdateOperationsInput | number
    empty_bottles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherExpenseUpdateWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherExpenseUncheckedUpdateWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherExpenseUncheckedUpdateManyWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}