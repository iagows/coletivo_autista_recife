
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
 * Model Contato
 * 
 */
export type Contato = $Result.DefaultSelection<Prisma.$ContatoPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Texto
 * 
 */
export type Texto = $Result.DefaultSelection<Prisma.$TextoPayload>
/**
 * Model Regra
 * 
 */
export type Regra = $Result.DefaultSelection<Prisma.$RegraPayload>
/**
 * Model Profissional
 * 
 */
export type Profissional = $Result.DefaultSelection<Prisma.$ProfissionalPayload>
/**
 * Model Especialidade
 * 
 */
export type Especialidade = $Result.DefaultSelection<Prisma.$EspecialidadePayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model ConsultorioEscola
 * 
 */
export type ConsultorioEscola = $Result.DefaultSelection<Prisma.$ConsultorioEscolaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contatoes
 * const contatoes = await prisma.contato.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Contatoes
   * const contatoes = await prisma.contato.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contato`: Exposes CRUD operations for the **Contato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatoes
    * const contatoes = await prisma.contato.findMany()
    * ```
    */
  get contato(): Prisma.ContatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.texto`: Exposes CRUD operations for the **Texto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Textos
    * const textos = await prisma.texto.findMany()
    * ```
    */
  get texto(): Prisma.TextoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regra`: Exposes CRUD operations for the **Regra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regras
    * const regras = await prisma.regra.findMany()
    * ```
    */
  get regra(): Prisma.RegraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional`: Exposes CRUD operations for the **Profissional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionals
    * const profissionals = await prisma.profissional.findMany()
    * ```
    */
  get profissional(): Prisma.ProfissionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidade`: Exposes CRUD operations for the **Especialidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidades
    * const especialidades = await prisma.especialidade.findMany()
    * ```
    */
  get especialidade(): Prisma.EspecialidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultorioEscola`: Exposes CRUD operations for the **ConsultorioEscola** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultorioEscolas
    * const consultorioEscolas = await prisma.consultorioEscola.findMany()
    * ```
    */
  get consultorioEscola(): Prisma.ConsultorioEscolaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Contato: 'Contato',
    Admin: 'Admin',
    Texto: 'Texto',
    Regra: 'Regra',
    Profissional: 'Profissional',
    Especialidade: 'Especialidade',
    Endereco: 'Endereco',
    Link: 'Link',
    ConsultorioEscola: 'ConsultorioEscola'
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
      modelProps: "contato" | "admin" | "texto" | "regra" | "profissional" | "especialidade" | "endereco" | "link" | "consultorioEscola"
      txIsolationLevel: never
    }
    model: {
      Contato: {
        payload: Prisma.$ContatoPayload<ExtArgs>
        fields: Prisma.ContatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findFirst: {
            args: Prisma.ContatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findMany: {
            args: Prisma.ContatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          create: {
            args: Prisma.ContatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          createMany: {
            args: Prisma.ContatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          update: {
            args: Prisma.ContatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          deleteMany: {
            args: Prisma.ContatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          aggregate: {
            args: Prisma.ContatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContato>
          }
          groupBy: {
            args: Prisma.ContatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContatoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContatoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContatoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContatoCountArgs<ExtArgs>
            result: $Utils.Optional<ContatoCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Texto: {
        payload: Prisma.$TextoPayload<ExtArgs>
        fields: Prisma.TextoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>
          }
          findFirst: {
            args: Prisma.TextoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>
          }
          findMany: {
            args: Prisma.TextoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>[]
          }
          create: {
            args: Prisma.TextoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>
          }
          createMany: {
            args: Prisma.TextoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TextoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>
          }
          update: {
            args: Prisma.TextoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>
          }
          deleteMany: {
            args: Prisma.TextoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TextoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextoPayload>
          }
          aggregate: {
            args: Prisma.TextoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTexto>
          }
          groupBy: {
            args: Prisma.TextoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TextoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TextoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TextoCountArgs<ExtArgs>
            result: $Utils.Optional<TextoCountAggregateOutputType> | number
          }
        }
      }
      Regra: {
        payload: Prisma.$RegraPayload<ExtArgs>
        fields: Prisma.RegraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>
          }
          findFirst: {
            args: Prisma.RegraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>
          }
          findMany: {
            args: Prisma.RegraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>[]
          }
          create: {
            args: Prisma.RegraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>
          }
          createMany: {
            args: Prisma.RegraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>
          }
          update: {
            args: Prisma.RegraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>
          }
          deleteMany: {
            args: Prisma.RegraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegraPayload>
          }
          aggregate: {
            args: Prisma.RegraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegra>
          }
          groupBy: {
            args: Prisma.RegraGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegraGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegraFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegraAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RegraCountArgs<ExtArgs>
            result: $Utils.Optional<RegraCountAggregateOutputType> | number
          }
        }
      }
      Profissional: {
        payload: Prisma.$ProfissionalPayload<ExtArgs>
        fields: Prisma.ProfissionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findFirst: {
            args: Prisma.ProfissionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findMany: {
            args: Prisma.ProfissionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          create: {
            args: Prisma.ProfissionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          createMany: {
            args: Prisma.ProfissionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfissionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          update: {
            args: Prisma.ProfissionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfissionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          aggregate: {
            args: Prisma.ProfissionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional>
          }
          groupBy: {
            args: Prisma.ProfissionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProfissionalFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProfissionalAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProfissionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalCountAggregateOutputType> | number
          }
        }
      }
      Especialidade: {
        payload: Prisma.$EspecialidadePayload<ExtArgs>
        fields: Prisma.EspecialidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findFirst: {
            args: Prisma.EspecialidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findMany: {
            args: Prisma.EspecialidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>[]
          }
          create: {
            args: Prisma.EspecialidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          createMany: {
            args: Prisma.EspecialidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspecialidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          update: {
            args: Prisma.EspecialidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          aggregate: {
            args: Prisma.EspecialidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidade>
          }
          groupBy: {
            args: Prisma.EspecialidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EspecialidadeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EspecialidadeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EspecialidadeCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EnderecoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EnderecoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LinkFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LinkAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      ConsultorioEscola: {
        payload: Prisma.$ConsultorioEscolaPayload<ExtArgs>
        fields: Prisma.ConsultorioEscolaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultorioEscolaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultorioEscolaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>
          }
          findFirst: {
            args: Prisma.ConsultorioEscolaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultorioEscolaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>
          }
          findMany: {
            args: Prisma.ConsultorioEscolaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>[]
          }
          create: {
            args: Prisma.ConsultorioEscolaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>
          }
          createMany: {
            args: Prisma.ConsultorioEscolaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConsultorioEscolaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>
          }
          update: {
            args: Prisma.ConsultorioEscolaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultorioEscolaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultorioEscolaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultorioEscolaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioEscolaPayload>
          }
          aggregate: {
            args: Prisma.ConsultorioEscolaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultorioEscola>
          }
          groupBy: {
            args: Prisma.ConsultorioEscolaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultorioEscolaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConsultorioEscolaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConsultorioEscolaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConsultorioEscolaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultorioEscolaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    contato?: ContatoOmit
    admin?: AdminOmit
    texto?: TextoOmit
    regra?: RegraOmit
    profissional?: ProfissionalOmit
    especialidade?: EspecialidadeOmit
    endereco?: EnderecoOmit
    link?: LinkOmit
    consultorioEscola?: ConsultorioEscolaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    contatos: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contatos?: boolean | AdminCountOutputTypeCountContatosArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
  }


  /**
   * Count Type ProfissionalCountOutputType
   */

  export type ProfissionalCountOutputType = {
    especialidades: number
    enderecos: number
    links: number
    contatos: number
  }

  export type ProfissionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | ProfissionalCountOutputTypeCountEspecialidadesArgs
    enderecos?: boolean | ProfissionalCountOutputTypeCountEnderecosArgs
    links?: boolean | ProfissionalCountOutputTypeCountLinksArgs
    contatos?: boolean | ProfissionalCountOutputTypeCountContatosArgs
  }

  // Custom InputTypes
  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalCountOutputType
     */
    select?: ProfissionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountEspecialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadeWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
  }


  /**
   * Count Type ConsultorioEscolaCountOutputType
   */

  export type ConsultorioEscolaCountOutputType = {
    enderecos: number
    contatos: number
    especialidades: number
  }

  export type ConsultorioEscolaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | ConsultorioEscolaCountOutputTypeCountEnderecosArgs
    contatos?: boolean | ConsultorioEscolaCountOutputTypeCountContatosArgs
    especialidades?: boolean | ConsultorioEscolaCountOutputTypeCountEspecialidadesArgs
  }

  // Custom InputTypes
  /**
   * ConsultorioEscolaCountOutputType without action
   */
  export type ConsultorioEscolaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscolaCountOutputType
     */
    select?: ConsultorioEscolaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultorioEscolaCountOutputType without action
   */
  export type ConsultorioEscolaCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
  }

  /**
   * ConsultorioEscolaCountOutputType without action
   */
  export type ConsultorioEscolaCountOutputTypeCountContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
  }

  /**
   * ConsultorioEscolaCountOutputType without action
   */
  export type ConsultorioEscolaCountOutputTypeCountEspecialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contato
   */

  export type AggregateContato = {
    _count: ContatoCountAggregateOutputType | null
    _avg: ContatoAvgAggregateOutputType | null
    _sum: ContatoSumAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  export type ContatoAvgAggregateOutputType = {
    ddd: number | null
    numero: number | null
  }

  export type ContatoSumAggregateOutputType = {
    ddd: number | null
    numero: number | null
  }

  export type ContatoMinAggregateOutputType = {
    id: string | null
    ddd: number | null
    numero: number | null
    isTelegram: boolean | null
    isWhatsapp: boolean | null
    adminId: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
  }

  export type ContatoMaxAggregateOutputType = {
    id: string | null
    ddd: number | null
    numero: number | null
    isTelegram: boolean | null
    isWhatsapp: boolean | null
    adminId: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
  }

  export type ContatoCountAggregateOutputType = {
    id: number
    ddd: number
    numero: number
    isTelegram: number
    isWhatsapp: number
    adminId: number
    profissionalId: number
    consultorioEscolaId: number
    _all: number
  }


  export type ContatoAvgAggregateInputType = {
    ddd?: true
    numero?: true
  }

  export type ContatoSumAggregateInputType = {
    ddd?: true
    numero?: true
  }

  export type ContatoMinAggregateInputType = {
    id?: true
    ddd?: true
    numero?: true
    isTelegram?: true
    isWhatsapp?: true
    adminId?: true
    profissionalId?: true
    consultorioEscolaId?: true
  }

  export type ContatoMaxAggregateInputType = {
    id?: true
    ddd?: true
    numero?: true
    isTelegram?: true
    isWhatsapp?: true
    adminId?: true
    profissionalId?: true
    consultorioEscolaId?: true
  }

  export type ContatoCountAggregateInputType = {
    id?: true
    ddd?: true
    numero?: true
    isTelegram?: true
    isWhatsapp?: true
    adminId?: true
    profissionalId?: true
    consultorioEscolaId?: true
    _all?: true
  }

  export type ContatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contato to aggregate.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contatoes
    **/
    _count?: true | ContatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatoMaxAggregateInputType
  }

  export type GetContatoAggregateType<T extends ContatoAggregateArgs> = {
        [P in keyof T & keyof AggregateContato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContato[P]>
      : GetScalarType<T[P], AggregateContato[P]>
  }




  export type ContatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithAggregationInput | ContatoOrderByWithAggregationInput[]
    by: ContatoScalarFieldEnum[] | ContatoScalarFieldEnum
    having?: ContatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatoCountAggregateInputType | true
    _avg?: ContatoAvgAggregateInputType
    _sum?: ContatoSumAggregateInputType
    _min?: ContatoMinAggregateInputType
    _max?: ContatoMaxAggregateInputType
  }

  export type ContatoGroupByOutputType = {
    id: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
    _count: ContatoCountAggregateOutputType | null
    _avg: ContatoAvgAggregateOutputType | null
    _sum: ContatoSumAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  type GetContatoGroupByPayload<T extends ContatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatoGroupByOutputType[P]>
            : GetScalarType<T[P], ContatoGroupByOutputType[P]>
        }
      >
    >


  export type ContatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ddd?: boolean
    numero?: boolean
    isTelegram?: boolean
    isWhatsapp?: boolean
    adminId?: boolean
    profissionalId?: boolean
    consultorioEscolaId?: boolean
    Admin?: boolean | Contato$AdminArgs<ExtArgs>
    Profissional?: boolean | Contato$ProfissionalArgs<ExtArgs>
    ConsultorioEscola?: boolean | Contato$ConsultorioEscolaArgs<ExtArgs>
  }, ExtArgs["result"]["contato"]>



  export type ContatoSelectScalar = {
    id?: boolean
    ddd?: boolean
    numero?: boolean
    isTelegram?: boolean
    isWhatsapp?: boolean
    adminId?: boolean
    profissionalId?: boolean
    consultorioEscolaId?: boolean
  }

  export type ContatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ddd" | "numero" | "isTelegram" | "isWhatsapp" | "adminId" | "profissionalId" | "consultorioEscolaId", ExtArgs["result"]["contato"]>
  export type ContatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | Contato$AdminArgs<ExtArgs>
    Profissional?: boolean | Contato$ProfissionalArgs<ExtArgs>
    ConsultorioEscola?: boolean | Contato$ConsultorioEscolaArgs<ExtArgs>
  }

  export type $ContatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contato"
    objects: {
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      Profissional: Prisma.$ProfissionalPayload<ExtArgs> | null
      ConsultorioEscola: Prisma.$ConsultorioEscolaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ddd: number
      numero: number
      isTelegram: boolean
      isWhatsapp: boolean
      adminId: string | null
      profissionalId: string | null
      consultorioEscolaId: string | null
    }, ExtArgs["result"]["contato"]>
    composites: {}
  }

  type ContatoGetPayload<S extends boolean | null | undefined | ContatoDefaultArgs> = $Result.GetResult<Prisma.$ContatoPayload, S>

  type ContatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContatoCountAggregateInputType | true
    }

  export interface ContatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contato'], meta: { name: 'Contato' } }
    /**
     * Find zero or one Contato that matches the filter.
     * @param {ContatoFindUniqueArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContatoFindUniqueArgs>(args: SelectSubset<T, ContatoFindUniqueArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContatoFindUniqueOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContatoFindFirstArgs>(args?: SelectSubset<T, ContatoFindFirstArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatoes
     * const contatoes = await prisma.contato.findMany()
     * 
     * // Get first 10 Contatoes
     * const contatoes = await prisma.contato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatoWithIdOnly = await prisma.contato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContatoFindManyArgs>(args?: SelectSubset<T, ContatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contato.
     * @param {ContatoCreateArgs} args - Arguments to create a Contato.
     * @example
     * // Create one Contato
     * const Contato = await prisma.contato.create({
     *   data: {
     *     // ... data to create a Contato
     *   }
     * })
     * 
     */
    create<T extends ContatoCreateArgs>(args: SelectSubset<T, ContatoCreateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contatoes.
     * @param {ContatoCreateManyArgs} args - Arguments to create many Contatoes.
     * @example
     * // Create many Contatoes
     * const contato = await prisma.contato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContatoCreateManyArgs>(args?: SelectSubset<T, ContatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contato.
     * @param {ContatoDeleteArgs} args - Arguments to delete one Contato.
     * @example
     * // Delete one Contato
     * const Contato = await prisma.contato.delete({
     *   where: {
     *     // ... filter to delete one Contato
     *   }
     * })
     * 
     */
    delete<T extends ContatoDeleteArgs>(args: SelectSubset<T, ContatoDeleteArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contato.
     * @param {ContatoUpdateArgs} args - Arguments to update one Contato.
     * @example
     * // Update one Contato
     * const contato = await prisma.contato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContatoUpdateArgs>(args: SelectSubset<T, ContatoUpdateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contatoes.
     * @param {ContatoDeleteManyArgs} args - Arguments to filter Contatoes to delete.
     * @example
     * // Delete a few Contatoes
     * const { count } = await prisma.contato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContatoDeleteManyArgs>(args?: SelectSubset<T, ContatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContatoUpdateManyArgs>(args: SelectSubset<T, ContatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contato.
     * @param {ContatoUpsertArgs} args - Arguments to update or create a Contato.
     * @example
     * // Update or create a Contato
     * const contato = await prisma.contato.upsert({
     *   create: {
     *     // ... data to create a Contato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contato we want to update
     *   }
     * })
     */
    upsert<T extends ContatoUpsertArgs>(args: SelectSubset<T, ContatoUpsertArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contatoes that matches the filter.
     * @param {ContatoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contato = await prisma.contato.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContatoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contato.
     * @param {ContatoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contato = await prisma.contato.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContatoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoCountArgs} args - Arguments to filter Contatoes to count.
     * @example
     * // Count the number of Contatoes
     * const count = await prisma.contato.count({
     *   where: {
     *     // ... the filter for the Contatoes we want to count
     *   }
     * })
    **/
    count<T extends ContatoCountArgs>(
      args?: Subset<T, ContatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContatoAggregateArgs>(args: Subset<T, ContatoAggregateArgs>): Prisma.PrismaPromise<GetContatoAggregateType<T>>

    /**
     * Group by Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoGroupByArgs} args - Group by arguments.
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
      T extends ContatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContatoGroupByArgs['orderBy'] }
        : { orderBy?: ContatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contato model
   */
  readonly fields: ContatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Admin<T extends Contato$AdminArgs<ExtArgs> = {}>(args?: Subset<T, Contato$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Profissional<T extends Contato$ProfissionalArgs<ExtArgs> = {}>(args?: Subset<T, Contato$ProfissionalArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ConsultorioEscola<T extends Contato$ConsultorioEscolaArgs<ExtArgs> = {}>(args?: Subset<T, Contato$ConsultorioEscolaArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contato model
   */
  interface ContatoFieldRefs {
    readonly id: FieldRef<"Contato", 'String'>
    readonly ddd: FieldRef<"Contato", 'Int'>
    readonly numero: FieldRef<"Contato", 'Int'>
    readonly isTelegram: FieldRef<"Contato", 'Boolean'>
    readonly isWhatsapp: FieldRef<"Contato", 'Boolean'>
    readonly adminId: FieldRef<"Contato", 'String'>
    readonly profissionalId: FieldRef<"Contato", 'String'>
    readonly consultorioEscolaId: FieldRef<"Contato", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contato findUnique
   */
  export type ContatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findUniqueOrThrow
   */
  export type ContatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findFirst
   */
  export type ContatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findFirstOrThrow
   */
  export type ContatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findMany
   */
  export type ContatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contatoes to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato create
   */
  export type ContatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Contato.
     */
    data: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
  }

  /**
   * Contato createMany
   */
  export type ContatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
  }

  /**
   * Contato update
   */
  export type ContatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Contato.
     */
    data: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
    /**
     * Choose, which Contato to update.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato updateMany
   */
  export type ContatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to update.
     */
    limit?: number
  }

  /**
   * Contato upsert
   */
  export type ContatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Contato to update in case it exists.
     */
    where: ContatoWhereUniqueInput
    /**
     * In case the Contato found by the `where` argument doesn't exist, create a new Contato with this data.
     */
    create: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
    /**
     * In case the Contato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
  }

  /**
   * Contato delete
   */
  export type ContatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter which Contato to delete.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato deleteMany
   */
  export type ContatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contatoes to delete
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to delete.
     */
    limit?: number
  }

  /**
   * Contato findRaw
   */
  export type ContatoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contato aggregateRaw
   */
  export type ContatoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contato.Admin
   */
  export type Contato$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Contato.Profissional
   */
  export type Contato$ProfissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
  }

  /**
   * Contato.ConsultorioEscola
   */
  export type Contato$ConsultorioEscolaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    where?: ConsultorioEscolaWhereInput
  }

  /**
   * Contato without action
   */
  export type ContatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    last_seen: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    last_seen: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    last_seen: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    last_seen?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    last_seen?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    last_seen?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    nome: string
    email: string
    last_seen: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    last_seen?: boolean
    contatos?: boolean | Admin$contatosArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    last_seen?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "last_seen", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contatos?: boolean | Admin$contatosArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      contatos: Prisma.$ContatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      last_seen: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contatos<T extends Admin$contatosArgs<ExtArgs> = {}>(args?: Subset<T, Admin$contatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly nome: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly last_seen: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin.contatos
   */
  export type Admin$contatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    cursor?: ContatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Texto
   */

  export type AggregateTexto = {
    _count: TextoCountAggregateOutputType | null
    _min: TextoMinAggregateOutputType | null
    _max: TextoMaxAggregateOutputType | null
  }

  export type TextoMinAggregateOutputType = {
    id: string | null
    texto: string | null
  }

  export type TextoMaxAggregateOutputType = {
    id: string | null
    texto: string | null
  }

  export type TextoCountAggregateOutputType = {
    id: number
    texto: number
    _all: number
  }


  export type TextoMinAggregateInputType = {
    id?: true
    texto?: true
  }

  export type TextoMaxAggregateInputType = {
    id?: true
    texto?: true
  }

  export type TextoCountAggregateInputType = {
    id?: true
    texto?: true
    _all?: true
  }

  export type TextoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texto to aggregate.
     */
    where?: TextoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Textos to fetch.
     */
    orderBy?: TextoOrderByWithRelationInput | TextoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Textos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Textos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Textos
    **/
    _count?: true | TextoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextoMaxAggregateInputType
  }

  export type GetTextoAggregateType<T extends TextoAggregateArgs> = {
        [P in keyof T & keyof AggregateTexto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTexto[P]>
      : GetScalarType<T[P], AggregateTexto[P]>
  }




  export type TextoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextoWhereInput
    orderBy?: TextoOrderByWithAggregationInput | TextoOrderByWithAggregationInput[]
    by: TextoScalarFieldEnum[] | TextoScalarFieldEnum
    having?: TextoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextoCountAggregateInputType | true
    _min?: TextoMinAggregateInputType
    _max?: TextoMaxAggregateInputType
  }

  export type TextoGroupByOutputType = {
    id: string
    texto: string
    _count: TextoCountAggregateOutputType | null
    _min: TextoMinAggregateOutputType | null
    _max: TextoMaxAggregateOutputType | null
  }

  type GetTextoGroupByPayload<T extends TextoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextoGroupByOutputType[P]>
            : GetScalarType<T[P], TextoGroupByOutputType[P]>
        }
      >
    >


  export type TextoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
  }, ExtArgs["result"]["texto"]>



  export type TextoSelectScalar = {
    id?: boolean
    texto?: boolean
  }

  export type TextoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto", ExtArgs["result"]["texto"]>

  export type $TextoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Texto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      texto: string
    }, ExtArgs["result"]["texto"]>
    composites: {}
  }

  type TextoGetPayload<S extends boolean | null | undefined | TextoDefaultArgs> = $Result.GetResult<Prisma.$TextoPayload, S>

  type TextoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextoCountAggregateInputType | true
    }

  export interface TextoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Texto'], meta: { name: 'Texto' } }
    /**
     * Find zero or one Texto that matches the filter.
     * @param {TextoFindUniqueArgs} args - Arguments to find a Texto
     * @example
     * // Get one Texto
     * const texto = await prisma.texto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextoFindUniqueArgs>(args: SelectSubset<T, TextoFindUniqueArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Texto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextoFindUniqueOrThrowArgs} args - Arguments to find a Texto
     * @example
     * // Get one Texto
     * const texto = await prisma.texto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextoFindUniqueOrThrowArgs>(args: SelectSubset<T, TextoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Texto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoFindFirstArgs} args - Arguments to find a Texto
     * @example
     * // Get one Texto
     * const texto = await prisma.texto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextoFindFirstArgs>(args?: SelectSubset<T, TextoFindFirstArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Texto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoFindFirstOrThrowArgs} args - Arguments to find a Texto
     * @example
     * // Get one Texto
     * const texto = await prisma.texto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextoFindFirstOrThrowArgs>(args?: SelectSubset<T, TextoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Textos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Textos
     * const textos = await prisma.texto.findMany()
     * 
     * // Get first 10 Textos
     * const textos = await prisma.texto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textoWithIdOnly = await prisma.texto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextoFindManyArgs>(args?: SelectSubset<T, TextoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Texto.
     * @param {TextoCreateArgs} args - Arguments to create a Texto.
     * @example
     * // Create one Texto
     * const Texto = await prisma.texto.create({
     *   data: {
     *     // ... data to create a Texto
     *   }
     * })
     * 
     */
    create<T extends TextoCreateArgs>(args: SelectSubset<T, TextoCreateArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Textos.
     * @param {TextoCreateManyArgs} args - Arguments to create many Textos.
     * @example
     * // Create many Textos
     * const texto = await prisma.texto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextoCreateManyArgs>(args?: SelectSubset<T, TextoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Texto.
     * @param {TextoDeleteArgs} args - Arguments to delete one Texto.
     * @example
     * // Delete one Texto
     * const Texto = await prisma.texto.delete({
     *   where: {
     *     // ... filter to delete one Texto
     *   }
     * })
     * 
     */
    delete<T extends TextoDeleteArgs>(args: SelectSubset<T, TextoDeleteArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Texto.
     * @param {TextoUpdateArgs} args - Arguments to update one Texto.
     * @example
     * // Update one Texto
     * const texto = await prisma.texto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextoUpdateArgs>(args: SelectSubset<T, TextoUpdateArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Textos.
     * @param {TextoDeleteManyArgs} args - Arguments to filter Textos to delete.
     * @example
     * // Delete a few Textos
     * const { count } = await prisma.texto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextoDeleteManyArgs>(args?: SelectSubset<T, TextoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Textos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Textos
     * const texto = await prisma.texto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextoUpdateManyArgs>(args: SelectSubset<T, TextoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Texto.
     * @param {TextoUpsertArgs} args - Arguments to update or create a Texto.
     * @example
     * // Update or create a Texto
     * const texto = await prisma.texto.upsert({
     *   create: {
     *     // ... data to create a Texto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Texto we want to update
     *   }
     * })
     */
    upsert<T extends TextoUpsertArgs>(args: SelectSubset<T, TextoUpsertArgs<ExtArgs>>): Prisma__TextoClient<$Result.GetResult<Prisma.$TextoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Textos that matches the filter.
     * @param {TextoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const texto = await prisma.texto.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TextoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Texto.
     * @param {TextoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const texto = await prisma.texto.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TextoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Textos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoCountArgs} args - Arguments to filter Textos to count.
     * @example
     * // Count the number of Textos
     * const count = await prisma.texto.count({
     *   where: {
     *     // ... the filter for the Textos we want to count
     *   }
     * })
    **/
    count<T extends TextoCountArgs>(
      args?: Subset<T, TextoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Texto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextoAggregateArgs>(args: Subset<T, TextoAggregateArgs>): Prisma.PrismaPromise<GetTextoAggregateType<T>>

    /**
     * Group by Texto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextoGroupByArgs} args - Group by arguments.
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
      T extends TextoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextoGroupByArgs['orderBy'] }
        : { orderBy?: TextoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Texto model
   */
  readonly fields: TextoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Texto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Texto model
   */
  interface TextoFieldRefs {
    readonly id: FieldRef<"Texto", 'String'>
    readonly texto: FieldRef<"Texto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Texto findUnique
   */
  export type TextoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * Filter, which Texto to fetch.
     */
    where: TextoWhereUniqueInput
  }

  /**
   * Texto findUniqueOrThrow
   */
  export type TextoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * Filter, which Texto to fetch.
     */
    where: TextoWhereUniqueInput
  }

  /**
   * Texto findFirst
   */
  export type TextoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * Filter, which Texto to fetch.
     */
    where?: TextoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Textos to fetch.
     */
    orderBy?: TextoOrderByWithRelationInput | TextoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Textos.
     */
    cursor?: TextoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Textos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Textos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Textos.
     */
    distinct?: TextoScalarFieldEnum | TextoScalarFieldEnum[]
  }

  /**
   * Texto findFirstOrThrow
   */
  export type TextoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * Filter, which Texto to fetch.
     */
    where?: TextoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Textos to fetch.
     */
    orderBy?: TextoOrderByWithRelationInput | TextoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Textos.
     */
    cursor?: TextoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Textos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Textos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Textos.
     */
    distinct?: TextoScalarFieldEnum | TextoScalarFieldEnum[]
  }

  /**
   * Texto findMany
   */
  export type TextoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * Filter, which Textos to fetch.
     */
    where?: TextoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Textos to fetch.
     */
    orderBy?: TextoOrderByWithRelationInput | TextoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Textos.
     */
    cursor?: TextoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Textos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Textos.
     */
    skip?: number
    distinct?: TextoScalarFieldEnum | TextoScalarFieldEnum[]
  }

  /**
   * Texto create
   */
  export type TextoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * The data needed to create a Texto.
     */
    data: XOR<TextoCreateInput, TextoUncheckedCreateInput>
  }

  /**
   * Texto createMany
   */
  export type TextoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Textos.
     */
    data: TextoCreateManyInput | TextoCreateManyInput[]
  }

  /**
   * Texto update
   */
  export type TextoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * The data needed to update a Texto.
     */
    data: XOR<TextoUpdateInput, TextoUncheckedUpdateInput>
    /**
     * Choose, which Texto to update.
     */
    where: TextoWhereUniqueInput
  }

  /**
   * Texto updateMany
   */
  export type TextoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Textos.
     */
    data: XOR<TextoUpdateManyMutationInput, TextoUncheckedUpdateManyInput>
    /**
     * Filter which Textos to update
     */
    where?: TextoWhereInput
    /**
     * Limit how many Textos to update.
     */
    limit?: number
  }

  /**
   * Texto upsert
   */
  export type TextoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * The filter to search for the Texto to update in case it exists.
     */
    where: TextoWhereUniqueInput
    /**
     * In case the Texto found by the `where` argument doesn't exist, create a new Texto with this data.
     */
    create: XOR<TextoCreateInput, TextoUncheckedCreateInput>
    /**
     * In case the Texto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextoUpdateInput, TextoUncheckedUpdateInput>
  }

  /**
   * Texto delete
   */
  export type TextoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
    /**
     * Filter which Texto to delete.
     */
    where: TextoWhereUniqueInput
  }

  /**
   * Texto deleteMany
   */
  export type TextoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Textos to delete
     */
    where?: TextoWhereInput
    /**
     * Limit how many Textos to delete.
     */
    limit?: number
  }

  /**
   * Texto findRaw
   */
  export type TextoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Texto aggregateRaw
   */
  export type TextoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Texto without action
   */
  export type TextoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texto
     */
    select?: TextoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texto
     */
    omit?: TextoOmit<ExtArgs> | null
  }


  /**
   * Model Regra
   */

  export type AggregateRegra = {
    _count: RegraCountAggregateOutputType | null
    _min: RegraMinAggregateOutputType | null
    _max: RegraMaxAggregateOutputType | null
  }

  export type RegraMinAggregateOutputType = {
    id: string | null
    texto: string | null
    descricao: string | null
  }

  export type RegraMaxAggregateOutputType = {
    id: string | null
    texto: string | null
    descricao: string | null
  }

  export type RegraCountAggregateOutputType = {
    id: number
    texto: number
    descricao: number
    _all: number
  }


  export type RegraMinAggregateInputType = {
    id?: true
    texto?: true
    descricao?: true
  }

  export type RegraMaxAggregateInputType = {
    id?: true
    texto?: true
    descricao?: true
  }

  export type RegraCountAggregateInputType = {
    id?: true
    texto?: true
    descricao?: true
    _all?: true
  }

  export type RegraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regra to aggregate.
     */
    where?: RegraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regras to fetch.
     */
    orderBy?: RegraOrderByWithRelationInput | RegraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regras
    **/
    _count?: true | RegraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegraMaxAggregateInputType
  }

  export type GetRegraAggregateType<T extends RegraAggregateArgs> = {
        [P in keyof T & keyof AggregateRegra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegra[P]>
      : GetScalarType<T[P], AggregateRegra[P]>
  }




  export type RegraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegraWhereInput
    orderBy?: RegraOrderByWithAggregationInput | RegraOrderByWithAggregationInput[]
    by: RegraScalarFieldEnum[] | RegraScalarFieldEnum
    having?: RegraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegraCountAggregateInputType | true
    _min?: RegraMinAggregateInputType
    _max?: RegraMaxAggregateInputType
  }

  export type RegraGroupByOutputType = {
    id: string
    texto: string
    descricao: string | null
    _count: RegraCountAggregateOutputType | null
    _min: RegraMinAggregateOutputType | null
    _max: RegraMaxAggregateOutputType | null
  }

  type GetRegraGroupByPayload<T extends RegraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegraGroupByOutputType[P]>
            : GetScalarType<T[P], RegraGroupByOutputType[P]>
        }
      >
    >


  export type RegraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["regra"]>



  export type RegraSelectScalar = {
    id?: boolean
    texto?: boolean
    descricao?: boolean
  }

  export type RegraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "descricao", ExtArgs["result"]["regra"]>

  export type $RegraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regra"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      texto: string
      descricao: string | null
    }, ExtArgs["result"]["regra"]>
    composites: {}
  }

  type RegraGetPayload<S extends boolean | null | undefined | RegraDefaultArgs> = $Result.GetResult<Prisma.$RegraPayload, S>

  type RegraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegraCountAggregateInputType | true
    }

  export interface RegraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regra'], meta: { name: 'Regra' } }
    /**
     * Find zero or one Regra that matches the filter.
     * @param {RegraFindUniqueArgs} args - Arguments to find a Regra
     * @example
     * // Get one Regra
     * const regra = await prisma.regra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegraFindUniqueArgs>(args: SelectSubset<T, RegraFindUniqueArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegraFindUniqueOrThrowArgs} args - Arguments to find a Regra
     * @example
     * // Get one Regra
     * const regra = await prisma.regra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegraFindUniqueOrThrowArgs>(args: SelectSubset<T, RegraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraFindFirstArgs} args - Arguments to find a Regra
     * @example
     * // Get one Regra
     * const regra = await prisma.regra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegraFindFirstArgs>(args?: SelectSubset<T, RegraFindFirstArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraFindFirstOrThrowArgs} args - Arguments to find a Regra
     * @example
     * // Get one Regra
     * const regra = await prisma.regra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegraFindFirstOrThrowArgs>(args?: SelectSubset<T, RegraFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regras
     * const regras = await prisma.regra.findMany()
     * 
     * // Get first 10 Regras
     * const regras = await prisma.regra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regraWithIdOnly = await prisma.regra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegraFindManyArgs>(args?: SelectSubset<T, RegraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regra.
     * @param {RegraCreateArgs} args - Arguments to create a Regra.
     * @example
     * // Create one Regra
     * const Regra = await prisma.regra.create({
     *   data: {
     *     // ... data to create a Regra
     *   }
     * })
     * 
     */
    create<T extends RegraCreateArgs>(args: SelectSubset<T, RegraCreateArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regras.
     * @param {RegraCreateManyArgs} args - Arguments to create many Regras.
     * @example
     * // Create many Regras
     * const regra = await prisma.regra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegraCreateManyArgs>(args?: SelectSubset<T, RegraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Regra.
     * @param {RegraDeleteArgs} args - Arguments to delete one Regra.
     * @example
     * // Delete one Regra
     * const Regra = await prisma.regra.delete({
     *   where: {
     *     // ... filter to delete one Regra
     *   }
     * })
     * 
     */
    delete<T extends RegraDeleteArgs>(args: SelectSubset<T, RegraDeleteArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regra.
     * @param {RegraUpdateArgs} args - Arguments to update one Regra.
     * @example
     * // Update one Regra
     * const regra = await prisma.regra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegraUpdateArgs>(args: SelectSubset<T, RegraUpdateArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regras.
     * @param {RegraDeleteManyArgs} args - Arguments to filter Regras to delete.
     * @example
     * // Delete a few Regras
     * const { count } = await prisma.regra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegraDeleteManyArgs>(args?: SelectSubset<T, RegraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regras
     * const regra = await prisma.regra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegraUpdateManyArgs>(args: SelectSubset<T, RegraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regra.
     * @param {RegraUpsertArgs} args - Arguments to update or create a Regra.
     * @example
     * // Update or create a Regra
     * const regra = await prisma.regra.upsert({
     *   create: {
     *     // ... data to create a Regra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regra we want to update
     *   }
     * })
     */
    upsert<T extends RegraUpsertArgs>(args: SelectSubset<T, RegraUpsertArgs<ExtArgs>>): Prisma__RegraClient<$Result.GetResult<Prisma.$RegraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regras that matches the filter.
     * @param {RegraFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const regra = await prisma.regra.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RegraFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Regra.
     * @param {RegraAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const regra = await prisma.regra.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RegraAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Regras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraCountArgs} args - Arguments to filter Regras to count.
     * @example
     * // Count the number of Regras
     * const count = await prisma.regra.count({
     *   where: {
     *     // ... the filter for the Regras we want to count
     *   }
     * })
    **/
    count<T extends RegraCountArgs>(
      args?: Subset<T, RegraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegraAggregateArgs>(args: Subset<T, RegraAggregateArgs>): Prisma.PrismaPromise<GetRegraAggregateType<T>>

    /**
     * Group by Regra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegraGroupByArgs} args - Group by arguments.
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
      T extends RegraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegraGroupByArgs['orderBy'] }
        : { orderBy?: RegraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regra model
   */
  readonly fields: RegraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Regra model
   */
  interface RegraFieldRefs {
    readonly id: FieldRef<"Regra", 'String'>
    readonly texto: FieldRef<"Regra", 'String'>
    readonly descricao: FieldRef<"Regra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Regra findUnique
   */
  export type RegraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * Filter, which Regra to fetch.
     */
    where: RegraWhereUniqueInput
  }

  /**
   * Regra findUniqueOrThrow
   */
  export type RegraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * Filter, which Regra to fetch.
     */
    where: RegraWhereUniqueInput
  }

  /**
   * Regra findFirst
   */
  export type RegraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * Filter, which Regra to fetch.
     */
    where?: RegraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regras to fetch.
     */
    orderBy?: RegraOrderByWithRelationInput | RegraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regras.
     */
    cursor?: RegraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regras.
     */
    distinct?: RegraScalarFieldEnum | RegraScalarFieldEnum[]
  }

  /**
   * Regra findFirstOrThrow
   */
  export type RegraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * Filter, which Regra to fetch.
     */
    where?: RegraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regras to fetch.
     */
    orderBy?: RegraOrderByWithRelationInput | RegraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regras.
     */
    cursor?: RegraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regras.
     */
    distinct?: RegraScalarFieldEnum | RegraScalarFieldEnum[]
  }

  /**
   * Regra findMany
   */
  export type RegraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * Filter, which Regras to fetch.
     */
    where?: RegraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regras to fetch.
     */
    orderBy?: RegraOrderByWithRelationInput | RegraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regras.
     */
    cursor?: RegraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regras.
     */
    skip?: number
    distinct?: RegraScalarFieldEnum | RegraScalarFieldEnum[]
  }

  /**
   * Regra create
   */
  export type RegraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * The data needed to create a Regra.
     */
    data: XOR<RegraCreateInput, RegraUncheckedCreateInput>
  }

  /**
   * Regra createMany
   */
  export type RegraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regras.
     */
    data: RegraCreateManyInput | RegraCreateManyInput[]
  }

  /**
   * Regra update
   */
  export type RegraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * The data needed to update a Regra.
     */
    data: XOR<RegraUpdateInput, RegraUncheckedUpdateInput>
    /**
     * Choose, which Regra to update.
     */
    where: RegraWhereUniqueInput
  }

  /**
   * Regra updateMany
   */
  export type RegraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regras.
     */
    data: XOR<RegraUpdateManyMutationInput, RegraUncheckedUpdateManyInput>
    /**
     * Filter which Regras to update
     */
    where?: RegraWhereInput
    /**
     * Limit how many Regras to update.
     */
    limit?: number
  }

  /**
   * Regra upsert
   */
  export type RegraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * The filter to search for the Regra to update in case it exists.
     */
    where: RegraWhereUniqueInput
    /**
     * In case the Regra found by the `where` argument doesn't exist, create a new Regra with this data.
     */
    create: XOR<RegraCreateInput, RegraUncheckedCreateInput>
    /**
     * In case the Regra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegraUpdateInput, RegraUncheckedUpdateInput>
  }

  /**
   * Regra delete
   */
  export type RegraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
    /**
     * Filter which Regra to delete.
     */
    where: RegraWhereUniqueInput
  }

  /**
   * Regra deleteMany
   */
  export type RegraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regras to delete
     */
    where?: RegraWhereInput
    /**
     * Limit how many Regras to delete.
     */
    limit?: number
  }

  /**
   * Regra findRaw
   */
  export type RegraFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Regra aggregateRaw
   */
  export type RegraAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Regra without action
   */
  export type RegraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regra
     */
    select?: RegraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regra
     */
    omit?: RegraOmit<ExtArgs> | null
  }


  /**
   * Model Profissional
   */

  export type AggregateProfissional = {
    _count: ProfissionalCountAggregateOutputType | null
    _avg: ProfissionalAvgAggregateOutputType | null
    _sum: ProfissionalSumAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  export type ProfissionalAvgAggregateOutputType = {
    preco: number | null
  }

  export type ProfissionalSumAggregateOutputType = {
    preco: number | null
  }

  export type ProfissionalMinAggregateOutputType = {
    id: string | null
    nome: string | null
    isParticular: boolean | null
    isPublico: boolean | null
    comentario: string | null
    preco: number | null
  }

  export type ProfissionalMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    isParticular: boolean | null
    isPublico: boolean | null
    comentario: string | null
    preco: number | null
  }

  export type ProfissionalCountAggregateOutputType = {
    id: number
    nome: number
    isParticular: number
    isPublico: number
    comentario: number
    preco: number
    _all: number
  }


  export type ProfissionalAvgAggregateInputType = {
    preco?: true
  }

  export type ProfissionalSumAggregateInputType = {
    preco?: true
  }

  export type ProfissionalMinAggregateInputType = {
    id?: true
    nome?: true
    isParticular?: true
    isPublico?: true
    comentario?: true
    preco?: true
  }

  export type ProfissionalMaxAggregateInputType = {
    id?: true
    nome?: true
    isParticular?: true
    isPublico?: true
    comentario?: true
    preco?: true
  }

  export type ProfissionalCountAggregateInputType = {
    id?: true
    nome?: true
    isParticular?: true
    isPublico?: true
    comentario?: true
    preco?: true
    _all?: true
  }

  export type ProfissionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissional to aggregate.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profissionals
    **/
    _count?: true | ProfissionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionalMaxAggregateInputType
  }

  export type GetProfissionalAggregateType<T extends ProfissionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional[P]>
      : GetScalarType<T[P], AggregateProfissional[P]>
  }




  export type ProfissionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalWhereInput
    orderBy?: ProfissionalOrderByWithAggregationInput | ProfissionalOrderByWithAggregationInput[]
    by: ProfissionalScalarFieldEnum[] | ProfissionalScalarFieldEnum
    having?: ProfissionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionalCountAggregateInputType | true
    _avg?: ProfissionalAvgAggregateInputType
    _sum?: ProfissionalSumAggregateInputType
    _min?: ProfissionalMinAggregateInputType
    _max?: ProfissionalMaxAggregateInputType
  }

  export type ProfissionalGroupByOutputType = {
    id: string
    nome: string
    isParticular: boolean | null
    isPublico: boolean | null
    comentario: string | null
    preco: number | null
    _count: ProfissionalCountAggregateOutputType | null
    _avg: ProfissionalAvgAggregateOutputType | null
    _sum: ProfissionalSumAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  type GetProfissionalGroupByPayload<T extends ProfissionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    isParticular?: boolean
    isPublico?: boolean
    comentario?: boolean
    preco?: boolean
    especialidades?: boolean | Profissional$especialidadesArgs<ExtArgs>
    enderecos?: boolean | Profissional$enderecosArgs<ExtArgs>
    links?: boolean | Profissional$linksArgs<ExtArgs>
    contatos?: boolean | Profissional$contatosArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>



  export type ProfissionalSelectScalar = {
    id?: boolean
    nome?: boolean
    isParticular?: boolean
    isPublico?: boolean
    comentario?: boolean
    preco?: boolean
  }

  export type ProfissionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "isParticular" | "isPublico" | "comentario" | "preco", ExtArgs["result"]["profissional"]>
  export type ProfissionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | Profissional$especialidadesArgs<ExtArgs>
    enderecos?: boolean | Profissional$enderecosArgs<ExtArgs>
    links?: boolean | Profissional$linksArgs<ExtArgs>
    contatos?: boolean | Profissional$contatosArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfissionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profissional"
    objects: {
      especialidades: Prisma.$EspecialidadePayload<ExtArgs>[]
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      links: Prisma.$LinkPayload<ExtArgs>[]
      contatos: Prisma.$ContatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      isParticular: boolean | null
      isPublico: boolean | null
      comentario: string | null
      preco: number | null
    }, ExtArgs["result"]["profissional"]>
    composites: {}
  }

  type ProfissionalGetPayload<S extends boolean | null | undefined | ProfissionalDefaultArgs> = $Result.GetResult<Prisma.$ProfissionalPayload, S>

  type ProfissionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionalCountAggregateInputType | true
    }

  export interface ProfissionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profissional'], meta: { name: 'Profissional' } }
    /**
     * Find zero or one Profissional that matches the filter.
     * @param {ProfissionalFindUniqueArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionalFindUniqueArgs>(args: SelectSubset<T, ProfissionalFindUniqueArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionalFindUniqueOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionalFindFirstArgs>(args?: SelectSubset<T, ProfissionalFindFirstArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionals
     * const profissionals = await prisma.profissional.findMany()
     * 
     * // Get first 10 Profissionals
     * const profissionals = await prisma.profissional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionalWithIdOnly = await prisma.profissional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionalFindManyArgs>(args?: SelectSubset<T, ProfissionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional.
     * @param {ProfissionalCreateArgs} args - Arguments to create a Profissional.
     * @example
     * // Create one Profissional
     * const Profissional = await prisma.profissional.create({
     *   data: {
     *     // ... data to create a Profissional
     *   }
     * })
     * 
     */
    create<T extends ProfissionalCreateArgs>(args: SelectSubset<T, ProfissionalCreateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionals.
     * @param {ProfissionalCreateManyArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionalCreateManyArgs>(args?: SelectSubset<T, ProfissionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissional.
     * @param {ProfissionalDeleteArgs} args - Arguments to delete one Profissional.
     * @example
     * // Delete one Profissional
     * const Profissional = await prisma.profissional.delete({
     *   where: {
     *     // ... filter to delete one Profissional
     *   }
     * })
     * 
     */
    delete<T extends ProfissionalDeleteArgs>(args: SelectSubset<T, ProfissionalDeleteArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional.
     * @param {ProfissionalUpdateArgs} args - Arguments to update one Profissional.
     * @example
     * // Update one Profissional
     * const profissional = await prisma.profissional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionalUpdateArgs>(args: SelectSubset<T, ProfissionalUpdateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionals.
     * @param {ProfissionalDeleteManyArgs} args - Arguments to filter Profissionals to delete.
     * @example
     * // Delete a few Profissionals
     * const { count } = await prisma.profissional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionalDeleteManyArgs>(args?: SelectSubset<T, ProfissionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionalUpdateManyArgs>(args: SelectSubset<T, ProfissionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissional.
     * @param {ProfissionalUpsertArgs} args - Arguments to update or create a Profissional.
     * @example
     * // Update or create a Profissional
     * const profissional = await prisma.profissional.upsert({
     *   create: {
     *     // ... data to create a Profissional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionalUpsertArgs>(args: SelectSubset<T, ProfissionalUpsertArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionals that matches the filter.
     * @param {ProfissionalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const profissional = await prisma.profissional.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProfissionalFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Profissional.
     * @param {ProfissionalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const profissional = await prisma.profissional.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProfissionalAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalCountArgs} args - Arguments to filter Profissionals to count.
     * @example
     * // Count the number of Profissionals
     * const count = await prisma.profissional.count({
     *   where: {
     *     // ... the filter for the Profissionals we want to count
     *   }
     * })
    **/
    count<T extends ProfissionalCountArgs>(
      args?: Subset<T, ProfissionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfissionalAggregateArgs>(args: Subset<T, ProfissionalAggregateArgs>): Prisma.PrismaPromise<GetProfissionalAggregateType<T>>

    /**
     * Group by Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalGroupByArgs} args - Group by arguments.
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
      T extends ProfissionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfissionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profissional model
   */
  readonly fields: ProfissionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profissional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidades<T extends Profissional$especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enderecos<T extends Profissional$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    links<T extends Profissional$linksArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contatos<T extends Profissional$contatosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$contatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profissional model
   */
  interface ProfissionalFieldRefs {
    readonly id: FieldRef<"Profissional", 'String'>
    readonly nome: FieldRef<"Profissional", 'String'>
    readonly isParticular: FieldRef<"Profissional", 'Boolean'>
    readonly isPublico: FieldRef<"Profissional", 'Boolean'>
    readonly comentario: FieldRef<"Profissional", 'String'>
    readonly preco: FieldRef<"Profissional", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Profissional findUnique
   */
  export type ProfissionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findUniqueOrThrow
   */
  export type ProfissionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findFirst
   */
  export type ProfissionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findFirstOrThrow
   */
  export type ProfissionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findMany
   */
  export type ProfissionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissionals to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional create
   */
  export type ProfissionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profissional.
     */
    data: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
  }

  /**
   * Profissional createMany
   */
  export type ProfissionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
  }

  /**
   * Profissional update
   */
  export type ProfissionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profissional.
     */
    data: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
    /**
     * Choose, which Profissional to update.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional updateMany
   */
  export type ProfissionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional upsert
   */
  export type ProfissionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profissional to update in case it exists.
     */
    where: ProfissionalWhereUniqueInput
    /**
     * In case the Profissional found by the `where` argument doesn't exist, create a new Profissional with this data.
     */
    create: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
    /**
     * In case the Profissional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
  }

  /**
   * Profissional delete
   */
  export type ProfissionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter which Profissional to delete.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional deleteMany
   */
  export type ProfissionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionals to delete
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to delete.
     */
    limit?: number
  }

  /**
   * Profissional findRaw
   */
  export type ProfissionalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profissional aggregateRaw
   */
  export type ProfissionalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profissional.especialidades
   */
  export type Profissional$especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    where?: EspecialidadeWhereInput
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    cursor?: EspecialidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Profissional.enderecos
   */
  export type Profissional$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Profissional.links
   */
  export type Profissional$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Profissional.contatos
   */
  export type Profissional$contatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    cursor?: ContatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Profissional without action
   */
  export type ProfissionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
  }


  /**
   * Model Especialidade
   */

  export type AggregateEspecialidade = {
    _count: EspecialidadeCountAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  export type EspecialidadeMinAggregateOutputType = {
    id: string | null
    nome: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
  }

  export type EspecialidadeMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
  }

  export type EspecialidadeCountAggregateOutputType = {
    id: number
    nome: number
    profissionalId: number
    consultorioEscolaId: number
    _all: number
  }


  export type EspecialidadeMinAggregateInputType = {
    id?: true
    nome?: true
    profissionalId?: true
    consultorioEscolaId?: true
  }

  export type EspecialidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    profissionalId?: true
    consultorioEscolaId?: true
  }

  export type EspecialidadeCountAggregateInputType = {
    id?: true
    nome?: true
    profissionalId?: true
    consultorioEscolaId?: true
    _all?: true
  }

  export type EspecialidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidade to aggregate.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidades
    **/
    _count?: true | EspecialidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type GetEspecialidadeAggregateType<T extends EspecialidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidade[P]>
      : GetScalarType<T[P], AggregateEspecialidade[P]>
  }




  export type EspecialidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadeWhereInput
    orderBy?: EspecialidadeOrderByWithAggregationInput | EspecialidadeOrderByWithAggregationInput[]
    by: EspecialidadeScalarFieldEnum[] | EspecialidadeScalarFieldEnum
    having?: EspecialidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadeCountAggregateInputType | true
    _min?: EspecialidadeMinAggregateInputType
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type EspecialidadeGroupByOutputType = {
    id: string
    nome: string
    profissionalId: string | null
    consultorioEscolaId: string | null
    _count: EspecialidadeCountAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  type GetEspecialidadeGroupByPayload<T extends EspecialidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    profissionalId?: boolean
    consultorioEscolaId?: boolean
    Profissional?: boolean | Especialidade$ProfissionalArgs<ExtArgs>
    ConsultorioEscola?: boolean | Especialidade$ConsultorioEscolaArgs<ExtArgs>
  }, ExtArgs["result"]["especialidade"]>



  export type EspecialidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    profissionalId?: boolean
    consultorioEscolaId?: boolean
  }

  export type EspecialidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "profissionalId" | "consultorioEscolaId", ExtArgs["result"]["especialidade"]>
  export type EspecialidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profissional?: boolean | Especialidade$ProfissionalArgs<ExtArgs>
    ConsultorioEscola?: boolean | Especialidade$ConsultorioEscolaArgs<ExtArgs>
  }

  export type $EspecialidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidade"
    objects: {
      Profissional: Prisma.$ProfissionalPayload<ExtArgs> | null
      ConsultorioEscola: Prisma.$ConsultorioEscolaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      profissionalId: string | null
      consultorioEscolaId: string | null
    }, ExtArgs["result"]["especialidade"]>
    composites: {}
  }

  type EspecialidadeGetPayload<S extends boolean | null | undefined | EspecialidadeDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadePayload, S>

  type EspecialidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadeCountAggregateInputType | true
    }

  export interface EspecialidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidade'], meta: { name: 'Especialidade' } }
    /**
     * Find zero or one Especialidade that matches the filter.
     * @param {EspecialidadeFindUniqueArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadeFindUniqueArgs>(args: SelectSubset<T, EspecialidadeFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadeFindUniqueOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadeFindFirstArgs>(args?: SelectSubset<T, EspecialidadeFindFirstArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidade.findMany()
     * 
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadeWithIdOnly = await prisma.especialidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadeFindManyArgs>(args?: SelectSubset<T, EspecialidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidade.
     * @param {EspecialidadeCreateArgs} args - Arguments to create a Especialidade.
     * @example
     * // Create one Especialidade
     * const Especialidade = await prisma.especialidade.create({
     *   data: {
     *     // ... data to create a Especialidade
     *   }
     * })
     * 
     */
    create<T extends EspecialidadeCreateArgs>(args: SelectSubset<T, EspecialidadeCreateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidades.
     * @param {EspecialidadeCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadeCreateManyArgs>(args?: SelectSubset<T, EspecialidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidade.
     * @param {EspecialidadeDeleteArgs} args - Arguments to delete one Especialidade.
     * @example
     * // Delete one Especialidade
     * const Especialidade = await prisma.especialidade.delete({
     *   where: {
     *     // ... filter to delete one Especialidade
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadeDeleteArgs>(args: SelectSubset<T, EspecialidadeDeleteArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidade.
     * @param {EspecialidadeUpdateArgs} args - Arguments to update one Especialidade.
     * @example
     * // Update one Especialidade
     * const especialidade = await prisma.especialidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadeUpdateArgs>(args: SelectSubset<T, EspecialidadeUpdateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidades.
     * @param {EspecialidadeDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadeDeleteManyArgs>(args?: SelectSubset<T, EspecialidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadeUpdateManyArgs>(args: SelectSubset<T, EspecialidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidade.
     * @param {EspecialidadeUpsertArgs} args - Arguments to update or create a Especialidade.
     * @example
     * // Update or create a Especialidade
     * const especialidade = await prisma.especialidade.upsert({
     *   create: {
     *     // ... data to create a Especialidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidade we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadeUpsertArgs>(args: SelectSubset<T, EspecialidadeUpsertArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * @param {EspecialidadeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const especialidade = await prisma.especialidade.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EspecialidadeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Especialidade.
     * @param {EspecialidadeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const especialidade = await prisma.especialidade.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EspecialidadeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidade.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadeCountArgs>(
      args?: Subset<T, EspecialidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadeAggregateArgs>(args: Subset<T, EspecialidadeAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadeAggregateType<T>>

    /**
     * Group by Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadeGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidade model
   */
  readonly fields: EspecialidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profissional<T extends Especialidade$ProfissionalArgs<ExtArgs> = {}>(args?: Subset<T, Especialidade$ProfissionalArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ConsultorioEscola<T extends Especialidade$ConsultorioEscolaArgs<ExtArgs> = {}>(args?: Subset<T, Especialidade$ConsultorioEscolaArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Especialidade model
   */
  interface EspecialidadeFieldRefs {
    readonly id: FieldRef<"Especialidade", 'String'>
    readonly nome: FieldRef<"Especialidade", 'String'>
    readonly profissionalId: FieldRef<"Especialidade", 'String'>
    readonly consultorioEscolaId: FieldRef<"Especialidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidade findUnique
   */
  export type EspecialidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findUniqueOrThrow
   */
  export type EspecialidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findFirst
   */
  export type EspecialidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findFirstOrThrow
   */
  export type EspecialidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findMany
   */
  export type EspecialidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidades to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade create
   */
  export type EspecialidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidade.
     */
    data: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
  }

  /**
   * Especialidade createMany
   */
  export type EspecialidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidades.
     */
    data: EspecialidadeCreateManyInput | EspecialidadeCreateManyInput[]
  }

  /**
   * Especialidade update
   */
  export type EspecialidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidade.
     */
    data: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
    /**
     * Choose, which Especialidade to update.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade updateMany
   */
  export type EspecialidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidades.
     */
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which Especialidades to update
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number
  }

  /**
   * Especialidade upsert
   */
  export type EspecialidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidade to update in case it exists.
     */
    where: EspecialidadeWhereUniqueInput
    /**
     * In case the Especialidade found by the `where` argument doesn't exist, create a new Especialidade with this data.
     */
    create: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
    /**
     * In case the Especialidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
  }

  /**
   * Especialidade delete
   */
  export type EspecialidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter which Especialidade to delete.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade deleteMany
   */
  export type EspecialidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidades to delete
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to delete.
     */
    limit?: number
  }

  /**
   * Especialidade findRaw
   */
  export type EspecialidadeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Especialidade aggregateRaw
   */
  export type EspecialidadeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Especialidade.Profissional
   */
  export type Especialidade$ProfissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
  }

  /**
   * Especialidade.ConsultorioEscola
   */
  export type Especialidade$ConsultorioEscolaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    where?: ConsultorioEscolaWhereInput
  }

  /**
   * Especialidade without action
   */
  export type EspecialidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    numero: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    numero: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: string | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    numero: number | null
    complemento: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: string | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    numero: number | null
    complemento: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    cidade: number
    bairro: number
    logradouro: number
    numero: number
    complemento: number
    profissionalId: number
    consultorioEscolaId: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    numero?: true
  }

  export type EnderecoSumAggregateInputType = {
    numero?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    numero?: true
    complemento?: true
    profissionalId?: true
    consultorioEscolaId?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    numero?: true
    complemento?: true
    profissionalId?: true
    consultorioEscolaId?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    numero?: true
    complemento?: true
    profissionalId?: true
    consultorioEscolaId?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: string
    cidade: string
    bairro: string
    logradouro: string
    numero: number | null
    complemento: string | null
    profissionalId: string | null
    consultorioEscolaId: string | null
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    profissionalId?: boolean
    consultorioEscolaId?: boolean
    Profissional?: boolean | Endereco$ProfissionalArgs<ExtArgs>
    ConsultorioEscola?: boolean | Endereco$ConsultorioEscolaArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>



  export type EnderecoSelectScalar = {
    id?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    profissionalId?: boolean
    consultorioEscolaId?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cidade" | "bairro" | "logradouro" | "numero" | "complemento" | "profissionalId" | "consultorioEscolaId", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profissional?: boolean | Endereco$ProfissionalArgs<ExtArgs>
    ConsultorioEscola?: boolean | Endereco$ConsultorioEscolaArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      Profissional: Prisma.$ProfissionalPayload<ExtArgs> | null
      ConsultorioEscola: Prisma.$ConsultorioEscolaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cidade: string
      bairro: string
      logradouro: string
      numero: number | null
      complemento: string | null
      profissionalId: string | null
      consultorioEscolaId: string | null
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * @param {EnderecoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const endereco = await prisma.endereco.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EnderecoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Endereco.
     * @param {EnderecoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const endereco = await prisma.endereco.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EnderecoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profissional<T extends Endereco$ProfissionalArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$ProfissionalArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ConsultorioEscola<T extends Endereco$ConsultorioEscolaArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$ConsultorioEscolaArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly logradouro: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'Int'>
    readonly complemento: FieldRef<"Endereco", 'String'>
    readonly profissionalId: FieldRef<"Endereco", 'String'>
    readonly consultorioEscolaId: FieldRef<"Endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco findRaw
   */
  export type EnderecoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Endereco aggregateRaw
   */
  export type EnderecoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Endereco.Profissional
   */
  export type Endereco$ProfissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
  }

  /**
   * Endereco.ConsultorioEscola
   */
  export type Endereco$ConsultorioEscolaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    where?: ConsultorioEscolaWhereInput
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    url: string | null
    profissionalId: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    url: string | null
    profissionalId: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    url: number
    profissionalId: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    id?: true
    url?: true
    profissionalId?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    url?: true
    profissionalId?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    url?: true
    profissionalId?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    url: string
    profissionalId: string | null
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    profissionalId?: boolean
    Profissional?: boolean | Link$ProfissionalArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>



  export type LinkSelectScalar = {
    id?: boolean
    url?: boolean
    profissionalId?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "profissionalId", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profissional?: boolean | Link$ProfissionalArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      Profissional: Prisma.$ProfissionalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      profissionalId: string | null
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * @param {LinkFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const link = await prisma.link.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LinkFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Link.
     * @param {LinkAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const link = await prisma.link.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LinkAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profissional<T extends Link$ProfissionalArgs<ExtArgs> = {}>(args?: Subset<T, Link$ProfissionalArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly profissionalId: FieldRef<"Link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link findRaw
   */
  export type LinkFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Link aggregateRaw
   */
  export type LinkAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Link.Profissional
   */
  export type Link$ProfissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model ConsultorioEscola
   */

  export type AggregateConsultorioEscola = {
    _count: ConsultorioEscolaCountAggregateOutputType | null
    _avg: ConsultorioEscolaAvgAggregateOutputType | null
    _sum: ConsultorioEscolaSumAggregateOutputType | null
    _min: ConsultorioEscolaMinAggregateOutputType | null
    _max: ConsultorioEscolaMaxAggregateOutputType | null
  }

  export type ConsultorioEscolaAvgAggregateOutputType = {
    preco: number | null
  }

  export type ConsultorioEscolaSumAggregateOutputType = {
    preco: number | null
  }

  export type ConsultorioEscolaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    comentario: string | null
  }

  export type ConsultorioEscolaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    comentario: string | null
  }

  export type ConsultorioEscolaCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    comentario: number
    _all: number
  }


  export type ConsultorioEscolaAvgAggregateInputType = {
    preco?: true
  }

  export type ConsultorioEscolaSumAggregateInputType = {
    preco?: true
  }

  export type ConsultorioEscolaMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    comentario?: true
  }

  export type ConsultorioEscolaMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    comentario?: true
  }

  export type ConsultorioEscolaCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    comentario?: true
    _all?: true
  }

  export type ConsultorioEscolaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultorioEscola to aggregate.
     */
    where?: ConsultorioEscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultorioEscolas to fetch.
     */
    orderBy?: ConsultorioEscolaOrderByWithRelationInput | ConsultorioEscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultorioEscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultorioEscolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultorioEscolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultorioEscolas
    **/
    _count?: true | ConsultorioEscolaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultorioEscolaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultorioEscolaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultorioEscolaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultorioEscolaMaxAggregateInputType
  }

  export type GetConsultorioEscolaAggregateType<T extends ConsultorioEscolaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultorioEscola]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultorioEscola[P]>
      : GetScalarType<T[P], AggregateConsultorioEscola[P]>
  }




  export type ConsultorioEscolaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultorioEscolaWhereInput
    orderBy?: ConsultorioEscolaOrderByWithAggregationInput | ConsultorioEscolaOrderByWithAggregationInput[]
    by: ConsultorioEscolaScalarFieldEnum[] | ConsultorioEscolaScalarFieldEnum
    having?: ConsultorioEscolaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultorioEscolaCountAggregateInputType | true
    _avg?: ConsultorioEscolaAvgAggregateInputType
    _sum?: ConsultorioEscolaSumAggregateInputType
    _min?: ConsultorioEscolaMinAggregateInputType
    _max?: ConsultorioEscolaMaxAggregateInputType
  }

  export type ConsultorioEscolaGroupByOutputType = {
    id: string
    nome: string
    preco: number | null
    comentario: string | null
    _count: ConsultorioEscolaCountAggregateOutputType | null
    _avg: ConsultorioEscolaAvgAggregateOutputType | null
    _sum: ConsultorioEscolaSumAggregateOutputType | null
    _min: ConsultorioEscolaMinAggregateOutputType | null
    _max: ConsultorioEscolaMaxAggregateOutputType | null
  }

  type GetConsultorioEscolaGroupByPayload<T extends ConsultorioEscolaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultorioEscolaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultorioEscolaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultorioEscolaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultorioEscolaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultorioEscolaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    comentario?: boolean
    enderecos?: boolean | ConsultorioEscola$enderecosArgs<ExtArgs>
    contatos?: boolean | ConsultorioEscola$contatosArgs<ExtArgs>
    especialidades?: boolean | ConsultorioEscola$especialidadesArgs<ExtArgs>
    _count?: boolean | ConsultorioEscolaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultorioEscola"]>



  export type ConsultorioEscolaSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
    comentario?: boolean
  }

  export type ConsultorioEscolaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco" | "comentario", ExtArgs["result"]["consultorioEscola"]>
  export type ConsultorioEscolaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | ConsultorioEscola$enderecosArgs<ExtArgs>
    contatos?: boolean | ConsultorioEscola$contatosArgs<ExtArgs>
    especialidades?: boolean | ConsultorioEscola$especialidadesArgs<ExtArgs>
    _count?: boolean | ConsultorioEscolaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConsultorioEscolaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultorioEscola"
    objects: {
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      contatos: Prisma.$ContatoPayload<ExtArgs>[]
      especialidades: Prisma.$EspecialidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      preco: number | null
      comentario: string | null
    }, ExtArgs["result"]["consultorioEscola"]>
    composites: {}
  }

  type ConsultorioEscolaGetPayload<S extends boolean | null | undefined | ConsultorioEscolaDefaultArgs> = $Result.GetResult<Prisma.$ConsultorioEscolaPayload, S>

  type ConsultorioEscolaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultorioEscolaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultorioEscolaCountAggregateInputType | true
    }

  export interface ConsultorioEscolaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultorioEscola'], meta: { name: 'ConsultorioEscola' } }
    /**
     * Find zero or one ConsultorioEscola that matches the filter.
     * @param {ConsultorioEscolaFindUniqueArgs} args - Arguments to find a ConsultorioEscola
     * @example
     * // Get one ConsultorioEscola
     * const consultorioEscola = await prisma.consultorioEscola.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultorioEscolaFindUniqueArgs>(args: SelectSubset<T, ConsultorioEscolaFindUniqueArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultorioEscola that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultorioEscolaFindUniqueOrThrowArgs} args - Arguments to find a ConsultorioEscola
     * @example
     * // Get one ConsultorioEscola
     * const consultorioEscola = await prisma.consultorioEscola.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultorioEscolaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultorioEscolaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultorioEscola that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaFindFirstArgs} args - Arguments to find a ConsultorioEscola
     * @example
     * // Get one ConsultorioEscola
     * const consultorioEscola = await prisma.consultorioEscola.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultorioEscolaFindFirstArgs>(args?: SelectSubset<T, ConsultorioEscolaFindFirstArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultorioEscola that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaFindFirstOrThrowArgs} args - Arguments to find a ConsultorioEscola
     * @example
     * // Get one ConsultorioEscola
     * const consultorioEscola = await prisma.consultorioEscola.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultorioEscolaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultorioEscolaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultorioEscolas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultorioEscolas
     * const consultorioEscolas = await prisma.consultorioEscola.findMany()
     * 
     * // Get first 10 ConsultorioEscolas
     * const consultorioEscolas = await prisma.consultorioEscola.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultorioEscolaWithIdOnly = await prisma.consultorioEscola.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultorioEscolaFindManyArgs>(args?: SelectSubset<T, ConsultorioEscolaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultorioEscola.
     * @param {ConsultorioEscolaCreateArgs} args - Arguments to create a ConsultorioEscola.
     * @example
     * // Create one ConsultorioEscola
     * const ConsultorioEscola = await prisma.consultorioEscola.create({
     *   data: {
     *     // ... data to create a ConsultorioEscola
     *   }
     * })
     * 
     */
    create<T extends ConsultorioEscolaCreateArgs>(args: SelectSubset<T, ConsultorioEscolaCreateArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultorioEscolas.
     * @param {ConsultorioEscolaCreateManyArgs} args - Arguments to create many ConsultorioEscolas.
     * @example
     * // Create many ConsultorioEscolas
     * const consultorioEscola = await prisma.consultorioEscola.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultorioEscolaCreateManyArgs>(args?: SelectSubset<T, ConsultorioEscolaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConsultorioEscola.
     * @param {ConsultorioEscolaDeleteArgs} args - Arguments to delete one ConsultorioEscola.
     * @example
     * // Delete one ConsultorioEscola
     * const ConsultorioEscola = await prisma.consultorioEscola.delete({
     *   where: {
     *     // ... filter to delete one ConsultorioEscola
     *   }
     * })
     * 
     */
    delete<T extends ConsultorioEscolaDeleteArgs>(args: SelectSubset<T, ConsultorioEscolaDeleteArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultorioEscola.
     * @param {ConsultorioEscolaUpdateArgs} args - Arguments to update one ConsultorioEscola.
     * @example
     * // Update one ConsultorioEscola
     * const consultorioEscola = await prisma.consultorioEscola.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultorioEscolaUpdateArgs>(args: SelectSubset<T, ConsultorioEscolaUpdateArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultorioEscolas.
     * @param {ConsultorioEscolaDeleteManyArgs} args - Arguments to filter ConsultorioEscolas to delete.
     * @example
     * // Delete a few ConsultorioEscolas
     * const { count } = await prisma.consultorioEscola.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultorioEscolaDeleteManyArgs>(args?: SelectSubset<T, ConsultorioEscolaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultorioEscolas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultorioEscolas
     * const consultorioEscola = await prisma.consultorioEscola.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultorioEscolaUpdateManyArgs>(args: SelectSubset<T, ConsultorioEscolaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConsultorioEscola.
     * @param {ConsultorioEscolaUpsertArgs} args - Arguments to update or create a ConsultorioEscola.
     * @example
     * // Update or create a ConsultorioEscola
     * const consultorioEscola = await prisma.consultorioEscola.upsert({
     *   create: {
     *     // ... data to create a ConsultorioEscola
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultorioEscola we want to update
     *   }
     * })
     */
    upsert<T extends ConsultorioEscolaUpsertArgs>(args: SelectSubset<T, ConsultorioEscolaUpsertArgs<ExtArgs>>): Prisma__ConsultorioEscolaClient<$Result.GetResult<Prisma.$ConsultorioEscolaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultorioEscolas that matches the filter.
     * @param {ConsultorioEscolaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const consultorioEscola = await prisma.consultorioEscola.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConsultorioEscolaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ConsultorioEscola.
     * @param {ConsultorioEscolaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const consultorioEscola = await prisma.consultorioEscola.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConsultorioEscolaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ConsultorioEscolas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaCountArgs} args - Arguments to filter ConsultorioEscolas to count.
     * @example
     * // Count the number of ConsultorioEscolas
     * const count = await prisma.consultorioEscola.count({
     *   where: {
     *     // ... the filter for the ConsultorioEscolas we want to count
     *   }
     * })
    **/
    count<T extends ConsultorioEscolaCountArgs>(
      args?: Subset<T, ConsultorioEscolaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultorioEscolaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultorioEscola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultorioEscolaAggregateArgs>(args: Subset<T, ConsultorioEscolaAggregateArgs>): Prisma.PrismaPromise<GetConsultorioEscolaAggregateType<T>>

    /**
     * Group by ConsultorioEscola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioEscolaGroupByArgs} args - Group by arguments.
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
      T extends ConsultorioEscolaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultorioEscolaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultorioEscolaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultorioEscolaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultorioEscolaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultorioEscola model
   */
  readonly fields: ConsultorioEscolaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultorioEscola.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultorioEscolaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends ConsultorioEscola$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, ConsultorioEscola$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contatos<T extends ConsultorioEscola$contatosArgs<ExtArgs> = {}>(args?: Subset<T, ConsultorioEscola$contatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    especialidades<T extends ConsultorioEscola$especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, ConsultorioEscola$especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ConsultorioEscola model
   */
  interface ConsultorioEscolaFieldRefs {
    readonly id: FieldRef<"ConsultorioEscola", 'String'>
    readonly nome: FieldRef<"ConsultorioEscola", 'String'>
    readonly preco: FieldRef<"ConsultorioEscola", 'Float'>
    readonly comentario: FieldRef<"ConsultorioEscola", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConsultorioEscola findUnique
   */
  export type ConsultorioEscolaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * Filter, which ConsultorioEscola to fetch.
     */
    where: ConsultorioEscolaWhereUniqueInput
  }

  /**
   * ConsultorioEscola findUniqueOrThrow
   */
  export type ConsultorioEscolaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * Filter, which ConsultorioEscola to fetch.
     */
    where: ConsultorioEscolaWhereUniqueInput
  }

  /**
   * ConsultorioEscola findFirst
   */
  export type ConsultorioEscolaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * Filter, which ConsultorioEscola to fetch.
     */
    where?: ConsultorioEscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultorioEscolas to fetch.
     */
    orderBy?: ConsultorioEscolaOrderByWithRelationInput | ConsultorioEscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultorioEscolas.
     */
    cursor?: ConsultorioEscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultorioEscolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultorioEscolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultorioEscolas.
     */
    distinct?: ConsultorioEscolaScalarFieldEnum | ConsultorioEscolaScalarFieldEnum[]
  }

  /**
   * ConsultorioEscola findFirstOrThrow
   */
  export type ConsultorioEscolaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * Filter, which ConsultorioEscola to fetch.
     */
    where?: ConsultorioEscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultorioEscolas to fetch.
     */
    orderBy?: ConsultorioEscolaOrderByWithRelationInput | ConsultorioEscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultorioEscolas.
     */
    cursor?: ConsultorioEscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultorioEscolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultorioEscolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultorioEscolas.
     */
    distinct?: ConsultorioEscolaScalarFieldEnum | ConsultorioEscolaScalarFieldEnum[]
  }

  /**
   * ConsultorioEscola findMany
   */
  export type ConsultorioEscolaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * Filter, which ConsultorioEscolas to fetch.
     */
    where?: ConsultorioEscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultorioEscolas to fetch.
     */
    orderBy?: ConsultorioEscolaOrderByWithRelationInput | ConsultorioEscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultorioEscolas.
     */
    cursor?: ConsultorioEscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultorioEscolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultorioEscolas.
     */
    skip?: number
    distinct?: ConsultorioEscolaScalarFieldEnum | ConsultorioEscolaScalarFieldEnum[]
  }

  /**
   * ConsultorioEscola create
   */
  export type ConsultorioEscolaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultorioEscola.
     */
    data: XOR<ConsultorioEscolaCreateInput, ConsultorioEscolaUncheckedCreateInput>
  }

  /**
   * ConsultorioEscola createMany
   */
  export type ConsultorioEscolaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultorioEscolas.
     */
    data: ConsultorioEscolaCreateManyInput | ConsultorioEscolaCreateManyInput[]
  }

  /**
   * ConsultorioEscola update
   */
  export type ConsultorioEscolaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultorioEscola.
     */
    data: XOR<ConsultorioEscolaUpdateInput, ConsultorioEscolaUncheckedUpdateInput>
    /**
     * Choose, which ConsultorioEscola to update.
     */
    where: ConsultorioEscolaWhereUniqueInput
  }

  /**
   * ConsultorioEscola updateMany
   */
  export type ConsultorioEscolaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultorioEscolas.
     */
    data: XOR<ConsultorioEscolaUpdateManyMutationInput, ConsultorioEscolaUncheckedUpdateManyInput>
    /**
     * Filter which ConsultorioEscolas to update
     */
    where?: ConsultorioEscolaWhereInput
    /**
     * Limit how many ConsultorioEscolas to update.
     */
    limit?: number
  }

  /**
   * ConsultorioEscola upsert
   */
  export type ConsultorioEscolaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultorioEscola to update in case it exists.
     */
    where: ConsultorioEscolaWhereUniqueInput
    /**
     * In case the ConsultorioEscola found by the `where` argument doesn't exist, create a new ConsultorioEscola with this data.
     */
    create: XOR<ConsultorioEscolaCreateInput, ConsultorioEscolaUncheckedCreateInput>
    /**
     * In case the ConsultorioEscola was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultorioEscolaUpdateInput, ConsultorioEscolaUncheckedUpdateInput>
  }

  /**
   * ConsultorioEscola delete
   */
  export type ConsultorioEscolaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
    /**
     * Filter which ConsultorioEscola to delete.
     */
    where: ConsultorioEscolaWhereUniqueInput
  }

  /**
   * ConsultorioEscola deleteMany
   */
  export type ConsultorioEscolaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultorioEscolas to delete
     */
    where?: ConsultorioEscolaWhereInput
    /**
     * Limit how many ConsultorioEscolas to delete.
     */
    limit?: number
  }

  /**
   * ConsultorioEscola findRaw
   */
  export type ConsultorioEscolaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ConsultorioEscola aggregateRaw
   */
  export type ConsultorioEscolaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ConsultorioEscola.enderecos
   */
  export type ConsultorioEscola$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * ConsultorioEscola.contatos
   */
  export type ConsultorioEscola$contatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    cursor?: ContatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * ConsultorioEscola.especialidades
   */
  export type ConsultorioEscola$especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    where?: EspecialidadeWhereInput
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    cursor?: EspecialidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * ConsultorioEscola without action
   */
  export type ConsultorioEscolaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorioEscola
     */
    select?: ConsultorioEscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultorioEscola
     */
    omit?: ConsultorioEscolaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorioEscolaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ContatoScalarFieldEnum: {
    id: 'id',
    ddd: 'ddd',
    numero: 'numero',
    isTelegram: 'isTelegram',
    isWhatsapp: 'isWhatsapp',
    adminId: 'adminId',
    profissionalId: 'profissionalId',
    consultorioEscolaId: 'consultorioEscolaId'
  };

  export type ContatoScalarFieldEnum = (typeof ContatoScalarFieldEnum)[keyof typeof ContatoScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    last_seen: 'last_seen'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TextoScalarFieldEnum: {
    id: 'id',
    texto: 'texto'
  };

  export type TextoScalarFieldEnum = (typeof TextoScalarFieldEnum)[keyof typeof TextoScalarFieldEnum]


  export const RegraScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    descricao: 'descricao'
  };

  export type RegraScalarFieldEnum = (typeof RegraScalarFieldEnum)[keyof typeof RegraScalarFieldEnum]


  export const ProfissionalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    isParticular: 'isParticular',
    isPublico: 'isPublico',
    comentario: 'comentario',
    preco: 'preco'
  };

  export type ProfissionalScalarFieldEnum = (typeof ProfissionalScalarFieldEnum)[keyof typeof ProfissionalScalarFieldEnum]


  export const EspecialidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    profissionalId: 'profissionalId',
    consultorioEscolaId: 'consultorioEscolaId'
  };

  export type EspecialidadeScalarFieldEnum = (typeof EspecialidadeScalarFieldEnum)[keyof typeof EspecialidadeScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    cidade: 'cidade',
    bairro: 'bairro',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    profissionalId: 'profissionalId',
    consultorioEscolaId: 'consultorioEscolaId'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    url: 'url',
    profissionalId: 'profissionalId'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const ConsultorioEscolaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco',
    comentario: 'comentario'
  };

  export type ConsultorioEscolaScalarFieldEnum = (typeof ConsultorioEscolaScalarFieldEnum)[keyof typeof ConsultorioEscolaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ContatoWhereInput = {
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    id?: StringFilter<"Contato"> | string
    ddd?: IntFilter<"Contato"> | number
    numero?: IntFilter<"Contato"> | number
    isTelegram?: BoolFilter<"Contato"> | boolean
    isWhatsapp?: BoolFilter<"Contato"> | boolean
    adminId?: StringNullableFilter<"Contato"> | string | null
    profissionalId?: StringNullableFilter<"Contato"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Contato"> | string | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    ConsultorioEscola?: XOR<ConsultorioEscolaNullableScalarRelationFilter, ConsultorioEscolaWhereInput> | null
  }

  export type ContatoOrderByWithRelationInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    isTelegram?: SortOrder
    isWhatsapp?: SortOrder
    adminId?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
    Admin?: AdminOrderByWithRelationInput
    Profissional?: ProfissionalOrderByWithRelationInput
    ConsultorioEscola?: ConsultorioEscolaOrderByWithRelationInput
  }

  export type ContatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    ddd?: IntFilter<"Contato"> | number
    numero?: IntFilter<"Contato"> | number
    isTelegram?: BoolFilter<"Contato"> | boolean
    isWhatsapp?: BoolFilter<"Contato"> | boolean
    adminId?: StringNullableFilter<"Contato"> | string | null
    profissionalId?: StringNullableFilter<"Contato"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Contato"> | string | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    ConsultorioEscola?: XOR<ConsultorioEscolaNullableScalarRelationFilter, ConsultorioEscolaWhereInput> | null
  }, "id">

  export type ContatoOrderByWithAggregationInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    isTelegram?: SortOrder
    isWhatsapp?: SortOrder
    adminId?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
    _count?: ContatoCountOrderByAggregateInput
    _avg?: ContatoAvgOrderByAggregateInput
    _max?: ContatoMaxOrderByAggregateInput
    _min?: ContatoMinOrderByAggregateInput
    _sum?: ContatoSumOrderByAggregateInput
  }

  export type ContatoScalarWhereWithAggregatesInput = {
    AND?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    OR?: ContatoScalarWhereWithAggregatesInput[]
    NOT?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contato"> | string
    ddd?: IntWithAggregatesFilter<"Contato"> | number
    numero?: IntWithAggregatesFilter<"Contato"> | number
    isTelegram?: BoolWithAggregatesFilter<"Contato"> | boolean
    isWhatsapp?: BoolWithAggregatesFilter<"Contato"> | boolean
    adminId?: StringNullableWithAggregatesFilter<"Contato"> | string | null
    profissionalId?: StringNullableWithAggregatesFilter<"Contato"> | string | null
    consultorioEscolaId?: StringNullableWithAggregatesFilter<"Contato"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    nome?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    last_seen?: DateTimeFilter<"Admin"> | Date | string
    contatos?: ContatoListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    last_seen?: SortOrder
    contatos?: ContatoOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    email?: StringFilter<"Admin"> | string
    last_seen?: DateTimeFilter<"Admin"> | Date | string
    contatos?: ContatoListRelationFilter
  }, "id" | "nome">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    last_seen?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    nome?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    last_seen?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type TextoWhereInput = {
    AND?: TextoWhereInput | TextoWhereInput[]
    OR?: TextoWhereInput[]
    NOT?: TextoWhereInput | TextoWhereInput[]
    id?: StringFilter<"Texto"> | string
    texto?: StringFilter<"Texto"> | string
  }

  export type TextoOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
  }

  export type TextoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    texto?: string
    AND?: TextoWhereInput | TextoWhereInput[]
    OR?: TextoWhereInput[]
    NOT?: TextoWhereInput | TextoWhereInput[]
  }, "id" | "texto">

  export type TextoOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    _count?: TextoCountOrderByAggregateInput
    _max?: TextoMaxOrderByAggregateInput
    _min?: TextoMinOrderByAggregateInput
  }

  export type TextoScalarWhereWithAggregatesInput = {
    AND?: TextoScalarWhereWithAggregatesInput | TextoScalarWhereWithAggregatesInput[]
    OR?: TextoScalarWhereWithAggregatesInput[]
    NOT?: TextoScalarWhereWithAggregatesInput | TextoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Texto"> | string
    texto?: StringWithAggregatesFilter<"Texto"> | string
  }

  export type RegraWhereInput = {
    AND?: RegraWhereInput | RegraWhereInput[]
    OR?: RegraWhereInput[]
    NOT?: RegraWhereInput | RegraWhereInput[]
    id?: StringFilter<"Regra"> | string
    texto?: StringFilter<"Regra"> | string
    descricao?: StringNullableFilter<"Regra"> | string | null
  }

  export type RegraOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    descricao?: SortOrder
  }

  export type RegraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    texto?: string
    AND?: RegraWhereInput | RegraWhereInput[]
    OR?: RegraWhereInput[]
    NOT?: RegraWhereInput | RegraWhereInput[]
    descricao?: StringNullableFilter<"Regra"> | string | null
  }, "id" | "texto">

  export type RegraOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    descricao?: SortOrder
    _count?: RegraCountOrderByAggregateInput
    _max?: RegraMaxOrderByAggregateInput
    _min?: RegraMinOrderByAggregateInput
  }

  export type RegraScalarWhereWithAggregatesInput = {
    AND?: RegraScalarWhereWithAggregatesInput | RegraScalarWhereWithAggregatesInput[]
    OR?: RegraScalarWhereWithAggregatesInput[]
    NOT?: RegraScalarWhereWithAggregatesInput | RegraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Regra"> | string
    texto?: StringWithAggregatesFilter<"Regra"> | string
    descricao?: StringNullableWithAggregatesFilter<"Regra"> | string | null
  }

  export type ProfissionalWhereInput = {
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    id?: StringFilter<"Profissional"> | string
    nome?: StringFilter<"Profissional"> | string
    isParticular?: BoolNullableFilter<"Profissional"> | boolean | null
    isPublico?: BoolNullableFilter<"Profissional"> | boolean | null
    comentario?: StringNullableFilter<"Profissional"> | string | null
    preco?: FloatNullableFilter<"Profissional"> | number | null
    especialidades?: EspecialidadeListRelationFilter
    enderecos?: EnderecoListRelationFilter
    links?: LinkListRelationFilter
    contatos?: ContatoListRelationFilter
  }

  export type ProfissionalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    isParticular?: SortOrder
    isPublico?: SortOrder
    comentario?: SortOrder
    preco?: SortOrder
    especialidades?: EspecialidadeOrderByRelationAggregateInput
    enderecos?: EnderecoOrderByRelationAggregateInput
    links?: LinkOrderByRelationAggregateInput
    contatos?: ContatoOrderByRelationAggregateInput
  }

  export type ProfissionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    isParticular?: BoolNullableFilter<"Profissional"> | boolean | null
    isPublico?: BoolNullableFilter<"Profissional"> | boolean | null
    comentario?: StringNullableFilter<"Profissional"> | string | null
    preco?: FloatNullableFilter<"Profissional"> | number | null
    especialidades?: EspecialidadeListRelationFilter
    enderecos?: EnderecoListRelationFilter
    links?: LinkListRelationFilter
    contatos?: ContatoListRelationFilter
  }, "id" | "nome">

  export type ProfissionalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    isParticular?: SortOrder
    isPublico?: SortOrder
    comentario?: SortOrder
    preco?: SortOrder
    _count?: ProfissionalCountOrderByAggregateInput
    _avg?: ProfissionalAvgOrderByAggregateInput
    _max?: ProfissionalMaxOrderByAggregateInput
    _min?: ProfissionalMinOrderByAggregateInput
    _sum?: ProfissionalSumOrderByAggregateInput
  }

  export type ProfissionalScalarWhereWithAggregatesInput = {
    AND?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    OR?: ProfissionalScalarWhereWithAggregatesInput[]
    NOT?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profissional"> | string
    nome?: StringWithAggregatesFilter<"Profissional"> | string
    isParticular?: BoolNullableWithAggregatesFilter<"Profissional"> | boolean | null
    isPublico?: BoolNullableWithAggregatesFilter<"Profissional"> | boolean | null
    comentario?: StringNullableWithAggregatesFilter<"Profissional"> | string | null
    preco?: FloatNullableWithAggregatesFilter<"Profissional"> | number | null
  }

  export type EspecialidadeWhereInput = {
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    id?: StringFilter<"Especialidade"> | string
    nome?: StringFilter<"Especialidade"> | string
    profissionalId?: StringNullableFilter<"Especialidade"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Especialidade"> | string | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    ConsultorioEscola?: XOR<ConsultorioEscolaNullableScalarRelationFilter, ConsultorioEscolaWhereInput> | null
  }

  export type EspecialidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
    Profissional?: ProfissionalOrderByWithRelationInput
    ConsultorioEscola?: ConsultorioEscolaOrderByWithRelationInput
  }

  export type EspecialidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    profissionalId?: StringNullableFilter<"Especialidade"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Especialidade"> | string | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    ConsultorioEscola?: XOR<ConsultorioEscolaNullableScalarRelationFilter, ConsultorioEscolaWhereInput> | null
  }, "id" | "nome">

  export type EspecialidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
    _count?: EspecialidadeCountOrderByAggregateInput
    _max?: EspecialidadeMaxOrderByAggregateInput
    _min?: EspecialidadeMinOrderByAggregateInput
  }

  export type EspecialidadeScalarWhereWithAggregatesInput = {
    AND?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    OR?: EspecialidadeScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialidade"> | string
    nome?: StringWithAggregatesFilter<"Especialidade"> | string
    profissionalId?: StringNullableWithAggregatesFilter<"Especialidade"> | string | null
    consultorioEscolaId?: StringNullableWithAggregatesFilter<"Especialidade"> | string | null
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    numero?: IntNullableFilter<"Endereco"> | number | null
    complemento?: StringNullableFilter<"Endereco"> | string | null
    profissionalId?: StringNullableFilter<"Endereco"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Endereco"> | string | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    ConsultorioEscola?: XOR<ConsultorioEscolaNullableScalarRelationFilter, ConsultorioEscolaWhereInput> | null
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
    Profissional?: ProfissionalOrderByWithRelationInput
    ConsultorioEscola?: ConsultorioEscolaOrderByWithRelationInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    cidade?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    numero?: IntNullableFilter<"Endereco"> | number | null
    complemento?: StringNullableFilter<"Endereco"> | string | null
    profissionalId?: StringNullableFilter<"Endereco"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Endereco"> | string | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    ConsultorioEscola?: XOR<ConsultorioEscolaNullableScalarRelationFilter, ConsultorioEscolaWhereInput> | null
  }, "id">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Endereco"> | string
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    logradouro?: StringWithAggregatesFilter<"Endereco"> | string
    numero?: IntNullableWithAggregatesFilter<"Endereco"> | number | null
    complemento?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    profissionalId?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    consultorioEscolaId?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    profissionalId?: StringNullableFilter<"Link"> | string | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    profissionalId?: SortOrder
    Profissional?: ProfissionalOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    profissionalId?: StringNullableFilter<"Link"> | string | null
    Profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
  }, "id" | "url">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    profissionalId?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    profissionalId?: StringNullableWithAggregatesFilter<"Link"> | string | null
  }

  export type ConsultorioEscolaWhereInput = {
    AND?: ConsultorioEscolaWhereInput | ConsultorioEscolaWhereInput[]
    OR?: ConsultorioEscolaWhereInput[]
    NOT?: ConsultorioEscolaWhereInput | ConsultorioEscolaWhereInput[]
    id?: StringFilter<"ConsultorioEscola"> | string
    nome?: StringFilter<"ConsultorioEscola"> | string
    preco?: FloatNullableFilter<"ConsultorioEscola"> | number | null
    comentario?: StringNullableFilter<"ConsultorioEscola"> | string | null
    enderecos?: EnderecoListRelationFilter
    contatos?: ContatoListRelationFilter
    especialidades?: EspecialidadeListRelationFilter
  }

  export type ConsultorioEscolaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    comentario?: SortOrder
    enderecos?: EnderecoOrderByRelationAggregateInput
    contatos?: ContatoOrderByRelationAggregateInput
    especialidades?: EspecialidadeOrderByRelationAggregateInput
  }

  export type ConsultorioEscolaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: ConsultorioEscolaWhereInput | ConsultorioEscolaWhereInput[]
    OR?: ConsultorioEscolaWhereInput[]
    NOT?: ConsultorioEscolaWhereInput | ConsultorioEscolaWhereInput[]
    preco?: FloatNullableFilter<"ConsultorioEscola"> | number | null
    comentario?: StringNullableFilter<"ConsultorioEscola"> | string | null
    enderecos?: EnderecoListRelationFilter
    contatos?: ContatoListRelationFilter
    especialidades?: EspecialidadeListRelationFilter
  }, "id" | "nome">

  export type ConsultorioEscolaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    comentario?: SortOrder
    _count?: ConsultorioEscolaCountOrderByAggregateInput
    _avg?: ConsultorioEscolaAvgOrderByAggregateInput
    _max?: ConsultorioEscolaMaxOrderByAggregateInput
    _min?: ConsultorioEscolaMinOrderByAggregateInput
    _sum?: ConsultorioEscolaSumOrderByAggregateInput
  }

  export type ConsultorioEscolaScalarWhereWithAggregatesInput = {
    AND?: ConsultorioEscolaScalarWhereWithAggregatesInput | ConsultorioEscolaScalarWhereWithAggregatesInput[]
    OR?: ConsultorioEscolaScalarWhereWithAggregatesInput[]
    NOT?: ConsultorioEscolaScalarWhereWithAggregatesInput | ConsultorioEscolaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultorioEscola"> | string
    nome?: StringWithAggregatesFilter<"ConsultorioEscola"> | string
    preco?: FloatNullableWithAggregatesFilter<"ConsultorioEscola"> | number | null
    comentario?: StringNullableWithAggregatesFilter<"ConsultorioEscola"> | string | null
  }

  export type ContatoCreateInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    Admin?: AdminCreateNestedOneWithoutContatosInput
    Profissional?: ProfissionalCreateNestedOneWithoutContatosInput
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutContatosInput
  }

  export type ContatoUncheckedCreateInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId?: string | null
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type ContatoUpdateInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    Admin?: AdminUpdateOneWithoutContatosNestedInput
    Profissional?: ProfissionalUpdateOneWithoutContatosNestedInput
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutContatosNestedInput
  }

  export type ContatoUncheckedUpdateInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContatoCreateManyInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId?: string | null
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type ContatoUpdateManyMutationInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContatoUncheckedUpdateManyInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    id?: string
    nome: string
    email: string
    last_seen: Date | string
    contatos?: ContatoCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    last_seen: Date | string
    contatos?: ContatoUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos?: ContatoUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos?: ContatoUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    nome: string
    email: string
    last_seen: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextoCreateInput = {
    id?: string
    texto: string
  }

  export type TextoUncheckedCreateInput = {
    id?: string
    texto: string
  }

  export type TextoUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type TextoUncheckedUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type TextoCreateManyInput = {
    id?: string
    texto: string
  }

  export type TextoUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type TextoUncheckedUpdateManyInput = {
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type RegraCreateInput = {
    id?: string
    texto: string
    descricao?: string | null
  }

  export type RegraUncheckedCreateInput = {
    id?: string
    texto: string
    descricao?: string | null
  }

  export type RegraUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegraUncheckedUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegraCreateManyInput = {
    id?: string
    texto: string
    descricao?: string | null
  }

  export type RegraUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegraUncheckedUpdateManyInput = {
    texto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfissionalCreateInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeCreateNestedManyWithoutProfissionalInput
    enderecos?: EnderecoCreateNestedManyWithoutProfissionalInput
    links?: LinkCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutProfissionalInput
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutProfissionalInput
    links?: LinkUncheckedCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUpdateManyWithoutProfissionalNestedInput
    enderecos?: EnderecoUpdateManyWithoutProfissionalNestedInput
    links?: LinkUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutProfissionalNestedInput
    enderecos?: EnderecoUncheckedUpdateManyWithoutProfissionalNestedInput
    links?: LinkUncheckedUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateManyInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
  }

  export type ProfissionalUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProfissionalUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EspecialidadeCreateInput = {
    id?: string
    nome: string
    Profissional?: ProfissionalCreateNestedOneWithoutEspecialidadesInput
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutEspecialidadesInput
  }

  export type EspecialidadeUncheckedCreateInput = {
    id?: string
    nome: string
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type EspecialidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Profissional?: ProfissionalUpdateOneWithoutEspecialidadesNestedInput
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutEspecialidadesNestedInput
  }

  export type EspecialidadeUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadeCreateManyInput = {
    id?: string
    nome: string
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type EspecialidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadeUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoCreateInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    Profissional?: ProfissionalCreateNestedOneWithoutEnderecosInput
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type EnderecoUpdateInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Profissional?: ProfissionalUpdateOneWithoutEnderecosNestedInput
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoCreateManyInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type EnderecoUpdateManyMutationInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUncheckedUpdateManyInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateInput = {
    id?: string
    url: string
    Profissional?: ProfissionalCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    url: string
    profissionalId?: string | null
  }

  export type LinkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    Profissional?: ProfissionalUpdateOneWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateManyInput = {
    id?: string
    url: string
    profissionalId?: string | null
  }

  export type LinkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultorioEscolaCreateInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    enderecos?: EnderecoCreateNestedManyWithoutConsultorioEscolaInput
    contatos?: ContatoCreateNestedManyWithoutConsultorioEscolaInput
    especialidades?: EspecialidadeCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaUncheckedCreateInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutConsultorioEscolaInput
    contatos?: ContatoUncheckedCreateNestedManyWithoutConsultorioEscolaInput
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUpdateManyWithoutConsultorioEscolaNestedInput
    contatos?: ContatoUpdateManyWithoutConsultorioEscolaNestedInput
    especialidades?: EspecialidadeUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ConsultorioEscolaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
    contatos?: ContatoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ConsultorioEscolaCreateManyInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
  }

  export type ConsultorioEscolaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultorioEscolaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type ProfissionalNullableScalarRelationFilter = {
    is?: ProfissionalWhereInput | null
    isNot?: ProfissionalWhereInput | null
  }

  export type ConsultorioEscolaNullableScalarRelationFilter = {
    is?: ConsultorioEscolaWhereInput | null
    isNot?: ConsultorioEscolaWhereInput | null
  }

  export type ContatoCountOrderByAggregateInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    isTelegram?: SortOrder
    isWhatsapp?: SortOrder
    adminId?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type ContatoAvgOrderByAggregateInput = {
    ddd?: SortOrder
    numero?: SortOrder
  }

  export type ContatoMaxOrderByAggregateInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    isTelegram?: SortOrder
    isWhatsapp?: SortOrder
    adminId?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type ContatoMinOrderByAggregateInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    isTelegram?: SortOrder
    isWhatsapp?: SortOrder
    adminId?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type ContatoSumOrderByAggregateInput = {
    ddd?: SortOrder
    numero?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type ContatoListRelationFilter = {
    every?: ContatoWhereInput
    some?: ContatoWhereInput
    none?: ContatoWhereInput
  }

  export type ContatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    last_seen?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    last_seen?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    last_seen?: SortOrder
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

  export type TextoCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
  }

  export type TextoMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
  }

  export type TextoMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
  }

  export type RegraCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    descricao?: SortOrder
  }

  export type RegraMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    descricao?: SortOrder
  }

  export type RegraMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    descricao?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type EspecialidadeListRelationFilter = {
    every?: EspecialidadeWhereInput
    some?: EspecialidadeWhereInput
    none?: EspecialidadeWhereInput
  }

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type EspecialidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfissionalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    isParticular?: SortOrder
    isPublico?: SortOrder
    comentario?: SortOrder
    preco?: SortOrder
  }

  export type ProfissionalAvgOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type ProfissionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    isParticular?: SortOrder
    isPublico?: SortOrder
    comentario?: SortOrder
    preco?: SortOrder
  }

  export type ProfissionalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    isParticular?: SortOrder
    isPublico?: SortOrder
    comentario?: SortOrder
    preco?: SortOrder
  }

  export type ProfissionalSumOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EspecialidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type EspecialidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type EspecialidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    profissionalId?: SortOrder
    consultorioEscolaId?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    profissionalId?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    profissionalId?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    profissionalId?: SortOrder
  }

  export type ConsultorioEscolaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    comentario?: SortOrder
  }

  export type ConsultorioEscolaAvgOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type ConsultorioEscolaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    comentario?: SortOrder
  }

  export type ConsultorioEscolaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    comentario?: SortOrder
  }

  export type ConsultorioEscolaSumOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type AdminCreateNestedOneWithoutContatosInput = {
    create?: XOR<AdminCreateWithoutContatosInput, AdminUncheckedCreateWithoutContatosInput>
    connectOrCreate?: AdminCreateOrConnectWithoutContatosInput
    connect?: AdminWhereUniqueInput
  }

  export type ProfissionalCreateNestedOneWithoutContatosInput = {
    create?: XOR<ProfissionalCreateWithoutContatosInput, ProfissionalUncheckedCreateWithoutContatosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutContatosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type ConsultorioEscolaCreateNestedOneWithoutContatosInput = {
    create?: XOR<ConsultorioEscolaCreateWithoutContatosInput, ConsultorioEscolaUncheckedCreateWithoutContatosInput>
    connectOrCreate?: ConsultorioEscolaCreateOrConnectWithoutContatosInput
    connect?: ConsultorioEscolaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AdminUpdateOneWithoutContatosNestedInput = {
    create?: XOR<AdminCreateWithoutContatosInput, AdminUncheckedCreateWithoutContatosInput>
    connectOrCreate?: AdminCreateOrConnectWithoutContatosInput
    upsert?: AdminUpsertWithoutContatosInput
    disconnect?: boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutContatosInput, AdminUpdateWithoutContatosInput>, AdminUncheckedUpdateWithoutContatosInput>
  }

  export type ProfissionalUpdateOneWithoutContatosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutContatosInput, ProfissionalUncheckedCreateWithoutContatosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutContatosInput
    upsert?: ProfissionalUpsertWithoutContatosInput
    disconnect?: boolean
    delete?: ProfissionalWhereInput | boolean
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutContatosInput, ProfissionalUpdateWithoutContatosInput>, ProfissionalUncheckedUpdateWithoutContatosInput>
  }

  export type ConsultorioEscolaUpdateOneWithoutContatosNestedInput = {
    create?: XOR<ConsultorioEscolaCreateWithoutContatosInput, ConsultorioEscolaUncheckedCreateWithoutContatosInput>
    connectOrCreate?: ConsultorioEscolaCreateOrConnectWithoutContatosInput
    upsert?: ConsultorioEscolaUpsertWithoutContatosInput
    disconnect?: boolean
    delete?: ConsultorioEscolaWhereInput | boolean
    connect?: ConsultorioEscolaWhereUniqueInput
    update?: XOR<XOR<ConsultorioEscolaUpdateToOneWithWhereWithoutContatosInput, ConsultorioEscolaUpdateWithoutContatosInput>, ConsultorioEscolaUncheckedUpdateWithoutContatosInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ContatoCreateNestedManyWithoutAdminInput = {
    create?: XOR<ContatoCreateWithoutAdminInput, ContatoUncheckedCreateWithoutAdminInput> | ContatoCreateWithoutAdminInput[] | ContatoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutAdminInput | ContatoCreateOrConnectWithoutAdminInput[]
    createMany?: ContatoCreateManyAdminInputEnvelope
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
  }

  export type ContatoUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ContatoCreateWithoutAdminInput, ContatoUncheckedCreateWithoutAdminInput> | ContatoCreateWithoutAdminInput[] | ContatoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutAdminInput | ContatoCreateOrConnectWithoutAdminInput[]
    createMany?: ContatoCreateManyAdminInputEnvelope
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContatoUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ContatoCreateWithoutAdminInput, ContatoUncheckedCreateWithoutAdminInput> | ContatoCreateWithoutAdminInput[] | ContatoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutAdminInput | ContatoCreateOrConnectWithoutAdminInput[]
    upsert?: ContatoUpsertWithWhereUniqueWithoutAdminInput | ContatoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ContatoCreateManyAdminInputEnvelope
    set?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    disconnect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    delete?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    update?: ContatoUpdateWithWhereUniqueWithoutAdminInput | ContatoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ContatoUpdateManyWithWhereWithoutAdminInput | ContatoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
  }

  export type ContatoUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ContatoCreateWithoutAdminInput, ContatoUncheckedCreateWithoutAdminInput> | ContatoCreateWithoutAdminInput[] | ContatoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutAdminInput | ContatoCreateOrConnectWithoutAdminInput[]
    upsert?: ContatoUpsertWithWhereUniqueWithoutAdminInput | ContatoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ContatoCreateManyAdminInputEnvelope
    set?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    disconnect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    delete?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    update?: ContatoUpdateWithWhereUniqueWithoutAdminInput | ContatoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ContatoUpdateManyWithWhereWithoutAdminInput | ContatoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
  }

  export type EspecialidadeCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput> | EspecialidadeCreateWithoutProfissionalInput[] | EspecialidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionalInput | EspecialidadeCreateOrConnectWithoutProfissionalInput[]
    createMany?: EspecialidadeCreateManyProfissionalInputEnvelope
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
  }

  export type EnderecoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<EnderecoCreateWithoutProfissionalInput, EnderecoUncheckedCreateWithoutProfissionalInput> | EnderecoCreateWithoutProfissionalInput[] | EnderecoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutProfissionalInput | EnderecoCreateOrConnectWithoutProfissionalInput[]
    createMany?: EnderecoCreateManyProfissionalInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type LinkCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<LinkCreateWithoutProfissionalInput, LinkUncheckedCreateWithoutProfissionalInput> | LinkCreateWithoutProfissionalInput[] | LinkUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutProfissionalInput | LinkCreateOrConnectWithoutProfissionalInput[]
    createMany?: LinkCreateManyProfissionalInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type ContatoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<ContatoCreateWithoutProfissionalInput, ContatoUncheckedCreateWithoutProfissionalInput> | ContatoCreateWithoutProfissionalInput[] | ContatoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutProfissionalInput | ContatoCreateOrConnectWithoutProfissionalInput[]
    createMany?: ContatoCreateManyProfissionalInputEnvelope
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
  }

  export type EspecialidadeUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput> | EspecialidadeCreateWithoutProfissionalInput[] | EspecialidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionalInput | EspecialidadeCreateOrConnectWithoutProfissionalInput[]
    createMany?: EspecialidadeCreateManyProfissionalInputEnvelope
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<EnderecoCreateWithoutProfissionalInput, EnderecoUncheckedCreateWithoutProfissionalInput> | EnderecoCreateWithoutProfissionalInput[] | EnderecoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutProfissionalInput | EnderecoCreateOrConnectWithoutProfissionalInput[]
    createMany?: EnderecoCreateManyProfissionalInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<LinkCreateWithoutProfissionalInput, LinkUncheckedCreateWithoutProfissionalInput> | LinkCreateWithoutProfissionalInput[] | LinkUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutProfissionalInput | LinkCreateOrConnectWithoutProfissionalInput[]
    createMany?: LinkCreateManyProfissionalInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type ContatoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<ContatoCreateWithoutProfissionalInput, ContatoUncheckedCreateWithoutProfissionalInput> | ContatoCreateWithoutProfissionalInput[] | ContatoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutProfissionalInput | ContatoCreateOrConnectWithoutProfissionalInput[]
    createMany?: ContatoCreateManyProfissionalInputEnvelope
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type EspecialidadeUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput> | EspecialidadeCreateWithoutProfissionalInput[] | EspecialidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionalInput | EspecialidadeCreateOrConnectWithoutProfissionalInput[]
    upsert?: EspecialidadeUpsertWithWhereUniqueWithoutProfissionalInput | EspecialidadeUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: EspecialidadeCreateManyProfissionalInputEnvelope
    set?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    disconnect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    delete?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    update?: EspecialidadeUpdateWithWhereUniqueWithoutProfissionalInput | EspecialidadeUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: EspecialidadeUpdateManyWithWhereWithoutProfissionalInput | EspecialidadeUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: EspecialidadeScalarWhereInput | EspecialidadeScalarWhereInput[]
  }

  export type EnderecoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<EnderecoCreateWithoutProfissionalInput, EnderecoUncheckedCreateWithoutProfissionalInput> | EnderecoCreateWithoutProfissionalInput[] | EnderecoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutProfissionalInput | EnderecoCreateOrConnectWithoutProfissionalInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutProfissionalInput | EnderecoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: EnderecoCreateManyProfissionalInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutProfissionalInput | EnderecoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutProfissionalInput | EnderecoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type LinkUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<LinkCreateWithoutProfissionalInput, LinkUncheckedCreateWithoutProfissionalInput> | LinkCreateWithoutProfissionalInput[] | LinkUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutProfissionalInput | LinkCreateOrConnectWithoutProfissionalInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutProfissionalInput | LinkUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: LinkCreateManyProfissionalInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutProfissionalInput | LinkUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutProfissionalInput | LinkUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type ContatoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<ContatoCreateWithoutProfissionalInput, ContatoUncheckedCreateWithoutProfissionalInput> | ContatoCreateWithoutProfissionalInput[] | ContatoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutProfissionalInput | ContatoCreateOrConnectWithoutProfissionalInput[]
    upsert?: ContatoUpsertWithWhereUniqueWithoutProfissionalInput | ContatoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: ContatoCreateManyProfissionalInputEnvelope
    set?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    disconnect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    delete?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    update?: ContatoUpdateWithWhereUniqueWithoutProfissionalInput | ContatoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: ContatoUpdateManyWithWhereWithoutProfissionalInput | ContatoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
  }

  export type EspecialidadeUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput> | EspecialidadeCreateWithoutProfissionalInput[] | EspecialidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionalInput | EspecialidadeCreateOrConnectWithoutProfissionalInput[]
    upsert?: EspecialidadeUpsertWithWhereUniqueWithoutProfissionalInput | EspecialidadeUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: EspecialidadeCreateManyProfissionalInputEnvelope
    set?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    disconnect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    delete?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    update?: EspecialidadeUpdateWithWhereUniqueWithoutProfissionalInput | EspecialidadeUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: EspecialidadeUpdateManyWithWhereWithoutProfissionalInput | EspecialidadeUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: EspecialidadeScalarWhereInput | EspecialidadeScalarWhereInput[]
  }

  export type EnderecoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<EnderecoCreateWithoutProfissionalInput, EnderecoUncheckedCreateWithoutProfissionalInput> | EnderecoCreateWithoutProfissionalInput[] | EnderecoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutProfissionalInput | EnderecoCreateOrConnectWithoutProfissionalInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutProfissionalInput | EnderecoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: EnderecoCreateManyProfissionalInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutProfissionalInput | EnderecoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutProfissionalInput | EnderecoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<LinkCreateWithoutProfissionalInput, LinkUncheckedCreateWithoutProfissionalInput> | LinkCreateWithoutProfissionalInput[] | LinkUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutProfissionalInput | LinkCreateOrConnectWithoutProfissionalInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutProfissionalInput | LinkUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: LinkCreateManyProfissionalInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutProfissionalInput | LinkUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutProfissionalInput | LinkUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type ContatoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<ContatoCreateWithoutProfissionalInput, ContatoUncheckedCreateWithoutProfissionalInput> | ContatoCreateWithoutProfissionalInput[] | ContatoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutProfissionalInput | ContatoCreateOrConnectWithoutProfissionalInput[]
    upsert?: ContatoUpsertWithWhereUniqueWithoutProfissionalInput | ContatoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: ContatoCreateManyProfissionalInputEnvelope
    set?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    disconnect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    delete?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    update?: ContatoUpdateWithWhereUniqueWithoutProfissionalInput | ContatoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: ContatoUpdateManyWithWhereWithoutProfissionalInput | ContatoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
  }

  export type ProfissionalCreateNestedOneWithoutEspecialidadesInput = {
    create?: XOR<ProfissionalCreateWithoutEspecialidadesInput, ProfissionalUncheckedCreateWithoutEspecialidadesInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEspecialidadesInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type ConsultorioEscolaCreateNestedOneWithoutEspecialidadesInput = {
    create?: XOR<ConsultorioEscolaCreateWithoutEspecialidadesInput, ConsultorioEscolaUncheckedCreateWithoutEspecialidadesInput>
    connectOrCreate?: ConsultorioEscolaCreateOrConnectWithoutEspecialidadesInput
    connect?: ConsultorioEscolaWhereUniqueInput
  }

  export type ProfissionalUpdateOneWithoutEspecialidadesNestedInput = {
    create?: XOR<ProfissionalCreateWithoutEspecialidadesInput, ProfissionalUncheckedCreateWithoutEspecialidadesInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEspecialidadesInput
    upsert?: ProfissionalUpsertWithoutEspecialidadesInput
    disconnect?: boolean
    delete?: ProfissionalWhereInput | boolean
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutEspecialidadesInput, ProfissionalUpdateWithoutEspecialidadesInput>, ProfissionalUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type ConsultorioEscolaUpdateOneWithoutEspecialidadesNestedInput = {
    create?: XOR<ConsultorioEscolaCreateWithoutEspecialidadesInput, ConsultorioEscolaUncheckedCreateWithoutEspecialidadesInput>
    connectOrCreate?: ConsultorioEscolaCreateOrConnectWithoutEspecialidadesInput
    upsert?: ConsultorioEscolaUpsertWithoutEspecialidadesInput
    disconnect?: boolean
    delete?: ConsultorioEscolaWhereInput | boolean
    connect?: ConsultorioEscolaWhereUniqueInput
    update?: XOR<XOR<ConsultorioEscolaUpdateToOneWithWhereWithoutEspecialidadesInput, ConsultorioEscolaUpdateWithoutEspecialidadesInput>, ConsultorioEscolaUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type ProfissionalCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<ProfissionalCreateWithoutEnderecosInput, ProfissionalUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEnderecosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type ConsultorioEscolaCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<ConsultorioEscolaCreateWithoutEnderecosInput, ConsultorioEscolaUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ConsultorioEscolaCreateOrConnectWithoutEnderecosInput
    connect?: ConsultorioEscolaWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ProfissionalUpdateOneWithoutEnderecosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutEnderecosInput, ProfissionalUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEnderecosInput
    upsert?: ProfissionalUpsertWithoutEnderecosInput
    disconnect?: boolean
    delete?: ProfissionalWhereInput | boolean
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutEnderecosInput, ProfissionalUpdateWithoutEnderecosInput>, ProfissionalUncheckedUpdateWithoutEnderecosInput>
  }

  export type ConsultorioEscolaUpdateOneWithoutEnderecosNestedInput = {
    create?: XOR<ConsultorioEscolaCreateWithoutEnderecosInput, ConsultorioEscolaUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ConsultorioEscolaCreateOrConnectWithoutEnderecosInput
    upsert?: ConsultorioEscolaUpsertWithoutEnderecosInput
    disconnect?: boolean
    delete?: ConsultorioEscolaWhereInput | boolean
    connect?: ConsultorioEscolaWhereUniqueInput
    update?: XOR<XOR<ConsultorioEscolaUpdateToOneWithWhereWithoutEnderecosInput, ConsultorioEscolaUpdateWithoutEnderecosInput>, ConsultorioEscolaUncheckedUpdateWithoutEnderecosInput>
  }

  export type ProfissionalCreateNestedOneWithoutLinksInput = {
    create?: XOR<ProfissionalCreateWithoutLinksInput, ProfissionalUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutLinksInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type ProfissionalUpdateOneWithoutLinksNestedInput = {
    create?: XOR<ProfissionalCreateWithoutLinksInput, ProfissionalUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutLinksInput
    upsert?: ProfissionalUpsertWithoutLinksInput
    disconnect?: boolean
    delete?: ProfissionalWhereInput | boolean
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutLinksInput, ProfissionalUpdateWithoutLinksInput>, ProfissionalUncheckedUpdateWithoutLinksInput>
  }

  export type EnderecoCreateNestedManyWithoutConsultorioEscolaInput = {
    create?: XOR<EnderecoCreateWithoutConsultorioEscolaInput, EnderecoUncheckedCreateWithoutConsultorioEscolaInput> | EnderecoCreateWithoutConsultorioEscolaInput[] | EnderecoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutConsultorioEscolaInput | EnderecoCreateOrConnectWithoutConsultorioEscolaInput[]
    createMany?: EnderecoCreateManyConsultorioEscolaInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type ContatoCreateNestedManyWithoutConsultorioEscolaInput = {
    create?: XOR<ContatoCreateWithoutConsultorioEscolaInput, ContatoUncheckedCreateWithoutConsultorioEscolaInput> | ContatoCreateWithoutConsultorioEscolaInput[] | ContatoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutConsultorioEscolaInput | ContatoCreateOrConnectWithoutConsultorioEscolaInput[]
    createMany?: ContatoCreateManyConsultorioEscolaInputEnvelope
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
  }

  export type EspecialidadeCreateNestedManyWithoutConsultorioEscolaInput = {
    create?: XOR<EspecialidadeCreateWithoutConsultorioEscolaInput, EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput> | EspecialidadeCreateWithoutConsultorioEscolaInput[] | EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput | EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput[]
    createMany?: EspecialidadeCreateManyConsultorioEscolaInputEnvelope
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedManyWithoutConsultorioEscolaInput = {
    create?: XOR<EnderecoCreateWithoutConsultorioEscolaInput, EnderecoUncheckedCreateWithoutConsultorioEscolaInput> | EnderecoCreateWithoutConsultorioEscolaInput[] | EnderecoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutConsultorioEscolaInput | EnderecoCreateOrConnectWithoutConsultorioEscolaInput[]
    createMany?: EnderecoCreateManyConsultorioEscolaInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type ContatoUncheckedCreateNestedManyWithoutConsultorioEscolaInput = {
    create?: XOR<ContatoCreateWithoutConsultorioEscolaInput, ContatoUncheckedCreateWithoutConsultorioEscolaInput> | ContatoCreateWithoutConsultorioEscolaInput[] | ContatoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutConsultorioEscolaInput | ContatoCreateOrConnectWithoutConsultorioEscolaInput[]
    createMany?: ContatoCreateManyConsultorioEscolaInputEnvelope
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
  }

  export type EspecialidadeUncheckedCreateNestedManyWithoutConsultorioEscolaInput = {
    create?: XOR<EspecialidadeCreateWithoutConsultorioEscolaInput, EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput> | EspecialidadeCreateWithoutConsultorioEscolaInput[] | EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput | EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput[]
    createMany?: EspecialidadeCreateManyConsultorioEscolaInputEnvelope
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
  }

  export type EnderecoUpdateManyWithoutConsultorioEscolaNestedInput = {
    create?: XOR<EnderecoCreateWithoutConsultorioEscolaInput, EnderecoUncheckedCreateWithoutConsultorioEscolaInput> | EnderecoCreateWithoutConsultorioEscolaInput[] | EnderecoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutConsultorioEscolaInput | EnderecoCreateOrConnectWithoutConsultorioEscolaInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutConsultorioEscolaInput | EnderecoUpsertWithWhereUniqueWithoutConsultorioEscolaInput[]
    createMany?: EnderecoCreateManyConsultorioEscolaInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutConsultorioEscolaInput | EnderecoUpdateWithWhereUniqueWithoutConsultorioEscolaInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutConsultorioEscolaInput | EnderecoUpdateManyWithWhereWithoutConsultorioEscolaInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type ContatoUpdateManyWithoutConsultorioEscolaNestedInput = {
    create?: XOR<ContatoCreateWithoutConsultorioEscolaInput, ContatoUncheckedCreateWithoutConsultorioEscolaInput> | ContatoCreateWithoutConsultorioEscolaInput[] | ContatoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutConsultorioEscolaInput | ContatoCreateOrConnectWithoutConsultorioEscolaInput[]
    upsert?: ContatoUpsertWithWhereUniqueWithoutConsultorioEscolaInput | ContatoUpsertWithWhereUniqueWithoutConsultorioEscolaInput[]
    createMany?: ContatoCreateManyConsultorioEscolaInputEnvelope
    set?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    disconnect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    delete?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    update?: ContatoUpdateWithWhereUniqueWithoutConsultorioEscolaInput | ContatoUpdateWithWhereUniqueWithoutConsultorioEscolaInput[]
    updateMany?: ContatoUpdateManyWithWhereWithoutConsultorioEscolaInput | ContatoUpdateManyWithWhereWithoutConsultorioEscolaInput[]
    deleteMany?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
  }

  export type EspecialidadeUpdateManyWithoutConsultorioEscolaNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutConsultorioEscolaInput, EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput> | EspecialidadeCreateWithoutConsultorioEscolaInput[] | EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput | EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput[]
    upsert?: EspecialidadeUpsertWithWhereUniqueWithoutConsultorioEscolaInput | EspecialidadeUpsertWithWhereUniqueWithoutConsultorioEscolaInput[]
    createMany?: EspecialidadeCreateManyConsultorioEscolaInputEnvelope
    set?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    disconnect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    delete?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    update?: EspecialidadeUpdateWithWhereUniqueWithoutConsultorioEscolaInput | EspecialidadeUpdateWithWhereUniqueWithoutConsultorioEscolaInput[]
    updateMany?: EspecialidadeUpdateManyWithWhereWithoutConsultorioEscolaInput | EspecialidadeUpdateManyWithWhereWithoutConsultorioEscolaInput[]
    deleteMany?: EspecialidadeScalarWhereInput | EspecialidadeScalarWhereInput[]
  }

  export type EnderecoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput = {
    create?: XOR<EnderecoCreateWithoutConsultorioEscolaInput, EnderecoUncheckedCreateWithoutConsultorioEscolaInput> | EnderecoCreateWithoutConsultorioEscolaInput[] | EnderecoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutConsultorioEscolaInput | EnderecoCreateOrConnectWithoutConsultorioEscolaInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutConsultorioEscolaInput | EnderecoUpsertWithWhereUniqueWithoutConsultorioEscolaInput[]
    createMany?: EnderecoCreateManyConsultorioEscolaInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutConsultorioEscolaInput | EnderecoUpdateWithWhereUniqueWithoutConsultorioEscolaInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutConsultorioEscolaInput | EnderecoUpdateManyWithWhereWithoutConsultorioEscolaInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type ContatoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput = {
    create?: XOR<ContatoCreateWithoutConsultorioEscolaInput, ContatoUncheckedCreateWithoutConsultorioEscolaInput> | ContatoCreateWithoutConsultorioEscolaInput[] | ContatoUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: ContatoCreateOrConnectWithoutConsultorioEscolaInput | ContatoCreateOrConnectWithoutConsultorioEscolaInput[]
    upsert?: ContatoUpsertWithWhereUniqueWithoutConsultorioEscolaInput | ContatoUpsertWithWhereUniqueWithoutConsultorioEscolaInput[]
    createMany?: ContatoCreateManyConsultorioEscolaInputEnvelope
    set?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    disconnect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    delete?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    connect?: ContatoWhereUniqueInput | ContatoWhereUniqueInput[]
    update?: ContatoUpdateWithWhereUniqueWithoutConsultorioEscolaInput | ContatoUpdateWithWhereUniqueWithoutConsultorioEscolaInput[]
    updateMany?: ContatoUpdateManyWithWhereWithoutConsultorioEscolaInput | ContatoUpdateManyWithWhereWithoutConsultorioEscolaInput[]
    deleteMany?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
  }

  export type EspecialidadeUncheckedUpdateManyWithoutConsultorioEscolaNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutConsultorioEscolaInput, EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput> | EspecialidadeCreateWithoutConsultorioEscolaInput[] | EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput[]
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput | EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput[]
    upsert?: EspecialidadeUpsertWithWhereUniqueWithoutConsultorioEscolaInput | EspecialidadeUpsertWithWhereUniqueWithoutConsultorioEscolaInput[]
    createMany?: EspecialidadeCreateManyConsultorioEscolaInputEnvelope
    set?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    disconnect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    delete?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    connect?: EspecialidadeWhereUniqueInput | EspecialidadeWhereUniqueInput[]
    update?: EspecialidadeUpdateWithWhereUniqueWithoutConsultorioEscolaInput | EspecialidadeUpdateWithWhereUniqueWithoutConsultorioEscolaInput[]
    updateMany?: EspecialidadeUpdateManyWithWhereWithoutConsultorioEscolaInput | EspecialidadeUpdateManyWithWhereWithoutConsultorioEscolaInput[]
    deleteMany?: EspecialidadeScalarWhereInput | EspecialidadeScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AdminCreateWithoutContatosInput = {
    id?: string
    nome: string
    email: string
    last_seen: Date | string
  }

  export type AdminUncheckedCreateWithoutContatosInput = {
    id?: string
    nome: string
    email: string
    last_seen: Date | string
  }

  export type AdminCreateOrConnectWithoutContatosInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutContatosInput, AdminUncheckedCreateWithoutContatosInput>
  }

  export type ProfissionalCreateWithoutContatosInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeCreateNestedManyWithoutProfissionalInput
    enderecos?: EnderecoCreateNestedManyWithoutProfissionalInput
    links?: LinkCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutContatosInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutProfissionalInput
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutProfissionalInput
    links?: LinkUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutContatosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutContatosInput, ProfissionalUncheckedCreateWithoutContatosInput>
  }

  export type ConsultorioEscolaCreateWithoutContatosInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    enderecos?: EnderecoCreateNestedManyWithoutConsultorioEscolaInput
    especialidades?: EspecialidadeCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaUncheckedCreateWithoutContatosInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutConsultorioEscolaInput
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaCreateOrConnectWithoutContatosInput = {
    where: ConsultorioEscolaWhereUniqueInput
    create: XOR<ConsultorioEscolaCreateWithoutContatosInput, ConsultorioEscolaUncheckedCreateWithoutContatosInput>
  }

  export type AdminUpsertWithoutContatosInput = {
    update: XOR<AdminUpdateWithoutContatosInput, AdminUncheckedUpdateWithoutContatosInput>
    create: XOR<AdminCreateWithoutContatosInput, AdminUncheckedCreateWithoutContatosInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutContatosInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutContatosInput, AdminUncheckedUpdateWithoutContatosInput>
  }

  export type AdminUpdateWithoutContatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutContatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalUpsertWithoutContatosInput = {
    update: XOR<ProfissionalUpdateWithoutContatosInput, ProfissionalUncheckedUpdateWithoutContatosInput>
    create: XOR<ProfissionalCreateWithoutContatosInput, ProfissionalUncheckedCreateWithoutContatosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutContatosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutContatosInput, ProfissionalUncheckedUpdateWithoutContatosInput>
  }

  export type ProfissionalUpdateWithoutContatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUpdateManyWithoutProfissionalNestedInput
    enderecos?: EnderecoUpdateManyWithoutProfissionalNestedInput
    links?: LinkUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutContatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutProfissionalNestedInput
    enderecos?: EnderecoUncheckedUpdateManyWithoutProfissionalNestedInput
    links?: LinkUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ConsultorioEscolaUpsertWithoutContatosInput = {
    update: XOR<ConsultorioEscolaUpdateWithoutContatosInput, ConsultorioEscolaUncheckedUpdateWithoutContatosInput>
    create: XOR<ConsultorioEscolaCreateWithoutContatosInput, ConsultorioEscolaUncheckedCreateWithoutContatosInput>
    where?: ConsultorioEscolaWhereInput
  }

  export type ConsultorioEscolaUpdateToOneWithWhereWithoutContatosInput = {
    where?: ConsultorioEscolaWhereInput
    data: XOR<ConsultorioEscolaUpdateWithoutContatosInput, ConsultorioEscolaUncheckedUpdateWithoutContatosInput>
  }

  export type ConsultorioEscolaUpdateWithoutContatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUpdateManyWithoutConsultorioEscolaNestedInput
    especialidades?: EspecialidadeUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ConsultorioEscolaUncheckedUpdateWithoutContatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ContatoCreateWithoutAdminInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    Profissional?: ProfissionalCreateNestedOneWithoutContatosInput
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutContatosInput
  }

  export type ContatoUncheckedCreateWithoutAdminInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type ContatoCreateOrConnectWithoutAdminInput = {
    where: ContatoWhereUniqueInput
    create: XOR<ContatoCreateWithoutAdminInput, ContatoUncheckedCreateWithoutAdminInput>
  }

  export type ContatoCreateManyAdminInputEnvelope = {
    data: ContatoCreateManyAdminInput | ContatoCreateManyAdminInput[]
  }

  export type ContatoUpsertWithWhereUniqueWithoutAdminInput = {
    where: ContatoWhereUniqueInput
    update: XOR<ContatoUpdateWithoutAdminInput, ContatoUncheckedUpdateWithoutAdminInput>
    create: XOR<ContatoCreateWithoutAdminInput, ContatoUncheckedCreateWithoutAdminInput>
  }

  export type ContatoUpdateWithWhereUniqueWithoutAdminInput = {
    where: ContatoWhereUniqueInput
    data: XOR<ContatoUpdateWithoutAdminInput, ContatoUncheckedUpdateWithoutAdminInput>
  }

  export type ContatoUpdateManyWithWhereWithoutAdminInput = {
    where: ContatoScalarWhereInput
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyWithoutAdminInput>
  }

  export type ContatoScalarWhereInput = {
    AND?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
    OR?: ContatoScalarWhereInput[]
    NOT?: ContatoScalarWhereInput | ContatoScalarWhereInput[]
    id?: StringFilter<"Contato"> | string
    ddd?: IntFilter<"Contato"> | number
    numero?: IntFilter<"Contato"> | number
    isTelegram?: BoolFilter<"Contato"> | boolean
    isWhatsapp?: BoolFilter<"Contato"> | boolean
    adminId?: StringNullableFilter<"Contato"> | string | null
    profissionalId?: StringNullableFilter<"Contato"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Contato"> | string | null
  }

  export type EspecialidadeCreateWithoutProfissionalInput = {
    id?: string
    nome: string
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutEspecialidadesInput
  }

  export type EspecialidadeUncheckedCreateWithoutProfissionalInput = {
    id?: string
    nome: string
    consultorioEscolaId?: string | null
  }

  export type EspecialidadeCreateOrConnectWithoutProfissionalInput = {
    where: EspecialidadeWhereUniqueInput
    create: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput>
  }

  export type EspecialidadeCreateManyProfissionalInputEnvelope = {
    data: EspecialidadeCreateManyProfissionalInput | EspecialidadeCreateManyProfissionalInput[]
  }

  export type EnderecoCreateWithoutProfissionalInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    consultorioEscolaId?: string | null
  }

  export type EnderecoCreateOrConnectWithoutProfissionalInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutProfissionalInput, EnderecoUncheckedCreateWithoutProfissionalInput>
  }

  export type EnderecoCreateManyProfissionalInputEnvelope = {
    data: EnderecoCreateManyProfissionalInput | EnderecoCreateManyProfissionalInput[]
  }

  export type LinkCreateWithoutProfissionalInput = {
    id?: string
    url: string
  }

  export type LinkUncheckedCreateWithoutProfissionalInput = {
    id?: string
    url: string
  }

  export type LinkCreateOrConnectWithoutProfissionalInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutProfissionalInput, LinkUncheckedCreateWithoutProfissionalInput>
  }

  export type LinkCreateManyProfissionalInputEnvelope = {
    data: LinkCreateManyProfissionalInput | LinkCreateManyProfissionalInput[]
  }

  export type ContatoCreateWithoutProfissionalInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    Admin?: AdminCreateNestedOneWithoutContatosInput
    ConsultorioEscola?: ConsultorioEscolaCreateNestedOneWithoutContatosInput
  }

  export type ContatoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId?: string | null
    consultorioEscolaId?: string | null
  }

  export type ContatoCreateOrConnectWithoutProfissionalInput = {
    where: ContatoWhereUniqueInput
    create: XOR<ContatoCreateWithoutProfissionalInput, ContatoUncheckedCreateWithoutProfissionalInput>
  }

  export type ContatoCreateManyProfissionalInputEnvelope = {
    data: ContatoCreateManyProfissionalInput | ContatoCreateManyProfissionalInput[]
  }

  export type EspecialidadeUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: EspecialidadeWhereUniqueInput
    update: XOR<EspecialidadeUpdateWithoutProfissionalInput, EspecialidadeUncheckedUpdateWithoutProfissionalInput>
    create: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput>
  }

  export type EspecialidadeUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: EspecialidadeWhereUniqueInput
    data: XOR<EspecialidadeUpdateWithoutProfissionalInput, EspecialidadeUncheckedUpdateWithoutProfissionalInput>
  }

  export type EspecialidadeUpdateManyWithWhereWithoutProfissionalInput = {
    where: EspecialidadeScalarWhereInput
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type EspecialidadeScalarWhereInput = {
    AND?: EspecialidadeScalarWhereInput | EspecialidadeScalarWhereInput[]
    OR?: EspecialidadeScalarWhereInput[]
    NOT?: EspecialidadeScalarWhereInput | EspecialidadeScalarWhereInput[]
    id?: StringFilter<"Especialidade"> | string
    nome?: StringFilter<"Especialidade"> | string
    profissionalId?: StringNullableFilter<"Especialidade"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Especialidade"> | string | null
  }

  export type EnderecoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutProfissionalInput, EnderecoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<EnderecoCreateWithoutProfissionalInput, EnderecoUncheckedCreateWithoutProfissionalInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutProfissionalInput, EnderecoUncheckedUpdateWithoutProfissionalInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutProfissionalInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type EnderecoScalarWhereInput = {
    AND?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    OR?: EnderecoScalarWhereInput[]
    NOT?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    id?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    numero?: IntNullableFilter<"Endereco"> | number | null
    complemento?: StringNullableFilter<"Endereco"> | string | null
    profissionalId?: StringNullableFilter<"Endereco"> | string | null
    consultorioEscolaId?: StringNullableFilter<"Endereco"> | string | null
  }

  export type LinkUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutProfissionalInput, LinkUncheckedUpdateWithoutProfissionalInput>
    create: XOR<LinkCreateWithoutProfissionalInput, LinkUncheckedCreateWithoutProfissionalInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutProfissionalInput, LinkUncheckedUpdateWithoutProfissionalInput>
  }

  export type LinkUpdateManyWithWhereWithoutProfissionalInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    profissionalId?: StringNullableFilter<"Link"> | string | null
  }

  export type ContatoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: ContatoWhereUniqueInput
    update: XOR<ContatoUpdateWithoutProfissionalInput, ContatoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<ContatoCreateWithoutProfissionalInput, ContatoUncheckedCreateWithoutProfissionalInput>
  }

  export type ContatoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: ContatoWhereUniqueInput
    data: XOR<ContatoUpdateWithoutProfissionalInput, ContatoUncheckedUpdateWithoutProfissionalInput>
  }

  export type ContatoUpdateManyWithWhereWithoutProfissionalInput = {
    where: ContatoScalarWhereInput
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type ProfissionalCreateWithoutEspecialidadesInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    enderecos?: EnderecoCreateNestedManyWithoutProfissionalInput
    links?: LinkCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutEspecialidadesInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutProfissionalInput
    links?: LinkUncheckedCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutEspecialidadesInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutEspecialidadesInput, ProfissionalUncheckedCreateWithoutEspecialidadesInput>
  }

  export type ConsultorioEscolaCreateWithoutEspecialidadesInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    enderecos?: EnderecoCreateNestedManyWithoutConsultorioEscolaInput
    contatos?: ContatoCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaUncheckedCreateWithoutEspecialidadesInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutConsultorioEscolaInput
    contatos?: ContatoUncheckedCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaCreateOrConnectWithoutEspecialidadesInput = {
    where: ConsultorioEscolaWhereUniqueInput
    create: XOR<ConsultorioEscolaCreateWithoutEspecialidadesInput, ConsultorioEscolaUncheckedCreateWithoutEspecialidadesInput>
  }

  export type ProfissionalUpsertWithoutEspecialidadesInput = {
    update: XOR<ProfissionalUpdateWithoutEspecialidadesInput, ProfissionalUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<ProfissionalCreateWithoutEspecialidadesInput, ProfissionalUncheckedCreateWithoutEspecialidadesInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutEspecialidadesInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutEspecialidadesInput, ProfissionalUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type ProfissionalUpdateWithoutEspecialidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    enderecos?: EnderecoUpdateManyWithoutProfissionalNestedInput
    links?: LinkUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutEspecialidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    enderecos?: EnderecoUncheckedUpdateManyWithoutProfissionalNestedInput
    links?: LinkUncheckedUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ConsultorioEscolaUpsertWithoutEspecialidadesInput = {
    update: XOR<ConsultorioEscolaUpdateWithoutEspecialidadesInput, ConsultorioEscolaUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<ConsultorioEscolaCreateWithoutEspecialidadesInput, ConsultorioEscolaUncheckedCreateWithoutEspecialidadesInput>
    where?: ConsultorioEscolaWhereInput
  }

  export type ConsultorioEscolaUpdateToOneWithWhereWithoutEspecialidadesInput = {
    where?: ConsultorioEscolaWhereInput
    data: XOR<ConsultorioEscolaUpdateWithoutEspecialidadesInput, ConsultorioEscolaUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type ConsultorioEscolaUpdateWithoutEspecialidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUpdateManyWithoutConsultorioEscolaNestedInput
    contatos?: ContatoUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ConsultorioEscolaUncheckedUpdateWithoutEspecialidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
    contatos?: ContatoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ProfissionalCreateWithoutEnderecosInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeCreateNestedManyWithoutProfissionalInput
    links?: LinkCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutEnderecosInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutProfissionalInput
    links?: LinkUncheckedCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutEnderecosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutEnderecosInput, ProfissionalUncheckedCreateWithoutEnderecosInput>
  }

  export type ConsultorioEscolaCreateWithoutEnderecosInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    contatos?: ContatoCreateNestedManyWithoutConsultorioEscolaInput
    especialidades?: EspecialidadeCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaUncheckedCreateWithoutEnderecosInput = {
    id?: string
    nome: string
    preco?: number | null
    comentario?: string | null
    contatos?: ContatoUncheckedCreateNestedManyWithoutConsultorioEscolaInput
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutConsultorioEscolaInput
  }

  export type ConsultorioEscolaCreateOrConnectWithoutEnderecosInput = {
    where: ConsultorioEscolaWhereUniqueInput
    create: XOR<ConsultorioEscolaCreateWithoutEnderecosInput, ConsultorioEscolaUncheckedCreateWithoutEnderecosInput>
  }

  export type ProfissionalUpsertWithoutEnderecosInput = {
    update: XOR<ProfissionalUpdateWithoutEnderecosInput, ProfissionalUncheckedUpdateWithoutEnderecosInput>
    create: XOR<ProfissionalCreateWithoutEnderecosInput, ProfissionalUncheckedCreateWithoutEnderecosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutEnderecosInput, ProfissionalUncheckedUpdateWithoutEnderecosInput>
  }

  export type ProfissionalUpdateWithoutEnderecosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUpdateManyWithoutProfissionalNestedInput
    links?: LinkUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutEnderecosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutProfissionalNestedInput
    links?: LinkUncheckedUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ConsultorioEscolaUpsertWithoutEnderecosInput = {
    update: XOR<ConsultorioEscolaUpdateWithoutEnderecosInput, ConsultorioEscolaUncheckedUpdateWithoutEnderecosInput>
    create: XOR<ConsultorioEscolaCreateWithoutEnderecosInput, ConsultorioEscolaUncheckedCreateWithoutEnderecosInput>
    where?: ConsultorioEscolaWhereInput
  }

  export type ConsultorioEscolaUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: ConsultorioEscolaWhereInput
    data: XOR<ConsultorioEscolaUpdateWithoutEnderecosInput, ConsultorioEscolaUncheckedUpdateWithoutEnderecosInput>
  }

  export type ConsultorioEscolaUpdateWithoutEnderecosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    contatos?: ContatoUpdateManyWithoutConsultorioEscolaNestedInput
    especialidades?: EspecialidadeUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ConsultorioEscolaUncheckedUpdateWithoutEnderecosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    contatos?: ContatoUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutConsultorioEscolaNestedInput
  }

  export type ProfissionalCreateWithoutLinksInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeCreateNestedManyWithoutProfissionalInput
    enderecos?: EnderecoCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutLinksInput = {
    id?: string
    nome: string
    isParticular?: boolean | null
    isPublico?: boolean | null
    comentario?: string | null
    preco?: number | null
    especialidades?: EspecialidadeUncheckedCreateNestedManyWithoutProfissionalInput
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutProfissionalInput
    contatos?: ContatoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutLinksInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutLinksInput, ProfissionalUncheckedCreateWithoutLinksInput>
  }

  export type ProfissionalUpsertWithoutLinksInput = {
    update: XOR<ProfissionalUpdateWithoutLinksInput, ProfissionalUncheckedUpdateWithoutLinksInput>
    create: XOR<ProfissionalCreateWithoutLinksInput, ProfissionalUncheckedCreateWithoutLinksInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutLinksInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutLinksInput, ProfissionalUncheckedUpdateWithoutLinksInput>
  }

  export type ProfissionalUpdateWithoutLinksInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUpdateManyWithoutProfissionalNestedInput
    enderecos?: EnderecoUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutLinksInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isParticular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    especialidades?: EspecialidadeUncheckedUpdateManyWithoutProfissionalNestedInput
    enderecos?: EnderecoUncheckedUpdateManyWithoutProfissionalNestedInput
    contatos?: ContatoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type EnderecoCreateWithoutConsultorioEscolaInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    Profissional?: ProfissionalCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateWithoutConsultorioEscolaInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    profissionalId?: string | null
  }

  export type EnderecoCreateOrConnectWithoutConsultorioEscolaInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutConsultorioEscolaInput, EnderecoUncheckedCreateWithoutConsultorioEscolaInput>
  }

  export type EnderecoCreateManyConsultorioEscolaInputEnvelope = {
    data: EnderecoCreateManyConsultorioEscolaInput | EnderecoCreateManyConsultorioEscolaInput[]
  }

  export type ContatoCreateWithoutConsultorioEscolaInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    Admin?: AdminCreateNestedOneWithoutContatosInput
    Profissional?: ProfissionalCreateNestedOneWithoutContatosInput
  }

  export type ContatoUncheckedCreateWithoutConsultorioEscolaInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId?: string | null
    profissionalId?: string | null
  }

  export type ContatoCreateOrConnectWithoutConsultorioEscolaInput = {
    where: ContatoWhereUniqueInput
    create: XOR<ContatoCreateWithoutConsultorioEscolaInput, ContatoUncheckedCreateWithoutConsultorioEscolaInput>
  }

  export type ContatoCreateManyConsultorioEscolaInputEnvelope = {
    data: ContatoCreateManyConsultorioEscolaInput | ContatoCreateManyConsultorioEscolaInput[]
  }

  export type EspecialidadeCreateWithoutConsultorioEscolaInput = {
    id?: string
    nome: string
    Profissional?: ProfissionalCreateNestedOneWithoutEspecialidadesInput
  }

  export type EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput = {
    id?: string
    nome: string
    profissionalId?: string | null
  }

  export type EspecialidadeCreateOrConnectWithoutConsultorioEscolaInput = {
    where: EspecialidadeWhereUniqueInput
    create: XOR<EspecialidadeCreateWithoutConsultorioEscolaInput, EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput>
  }

  export type EspecialidadeCreateManyConsultorioEscolaInputEnvelope = {
    data: EspecialidadeCreateManyConsultorioEscolaInput | EspecialidadeCreateManyConsultorioEscolaInput[]
  }

  export type EnderecoUpsertWithWhereUniqueWithoutConsultorioEscolaInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutConsultorioEscolaInput, EnderecoUncheckedUpdateWithoutConsultorioEscolaInput>
    create: XOR<EnderecoCreateWithoutConsultorioEscolaInput, EnderecoUncheckedCreateWithoutConsultorioEscolaInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutConsultorioEscolaInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutConsultorioEscolaInput, EnderecoUncheckedUpdateWithoutConsultorioEscolaInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutConsultorioEscolaInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutConsultorioEscolaInput>
  }

  export type ContatoUpsertWithWhereUniqueWithoutConsultorioEscolaInput = {
    where: ContatoWhereUniqueInput
    update: XOR<ContatoUpdateWithoutConsultorioEscolaInput, ContatoUncheckedUpdateWithoutConsultorioEscolaInput>
    create: XOR<ContatoCreateWithoutConsultorioEscolaInput, ContatoUncheckedCreateWithoutConsultorioEscolaInput>
  }

  export type ContatoUpdateWithWhereUniqueWithoutConsultorioEscolaInput = {
    where: ContatoWhereUniqueInput
    data: XOR<ContatoUpdateWithoutConsultorioEscolaInput, ContatoUncheckedUpdateWithoutConsultorioEscolaInput>
  }

  export type ContatoUpdateManyWithWhereWithoutConsultorioEscolaInput = {
    where: ContatoScalarWhereInput
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyWithoutConsultorioEscolaInput>
  }

  export type EspecialidadeUpsertWithWhereUniqueWithoutConsultorioEscolaInput = {
    where: EspecialidadeWhereUniqueInput
    update: XOR<EspecialidadeUpdateWithoutConsultorioEscolaInput, EspecialidadeUncheckedUpdateWithoutConsultorioEscolaInput>
    create: XOR<EspecialidadeCreateWithoutConsultorioEscolaInput, EspecialidadeUncheckedCreateWithoutConsultorioEscolaInput>
  }

  export type EspecialidadeUpdateWithWhereUniqueWithoutConsultorioEscolaInput = {
    where: EspecialidadeWhereUniqueInput
    data: XOR<EspecialidadeUpdateWithoutConsultorioEscolaInput, EspecialidadeUncheckedUpdateWithoutConsultorioEscolaInput>
  }

  export type EspecialidadeUpdateManyWithWhereWithoutConsultorioEscolaInput = {
    where: EspecialidadeScalarWhereInput
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyWithoutConsultorioEscolaInput>
  }

  export type ContatoCreateManyAdminInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    profissionalId?: string | null
    consultorioEscolaId?: string | null
  }

  export type ContatoUpdateWithoutAdminInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    Profissional?: ProfissionalUpdateOneWithoutContatosNestedInput
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutContatosNestedInput
  }

  export type ContatoUncheckedUpdateWithoutAdminInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContatoUncheckedUpdateManyWithoutAdminInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadeCreateManyProfissionalInput = {
    id?: string
    nome: string
    consultorioEscolaId?: string | null
  }

  export type EnderecoCreateManyProfissionalInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    consultorioEscolaId?: string | null
  }

  export type LinkCreateManyProfissionalInput = {
    id?: string
    url: string
  }

  export type ContatoCreateManyProfissionalInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId?: string | null
    consultorioEscolaId?: string | null
  }

  export type EspecialidadeUpdateWithoutProfissionalInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutEspecialidadesNestedInput
  }

  export type EspecialidadeUncheckedUpdateWithoutProfissionalInput = {
    nome?: StringFieldUpdateOperationsInput | string
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadeUncheckedUpdateManyWithoutProfissionalInput = {
    nome?: StringFieldUpdateOperationsInput | string
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUpdateWithoutProfissionalInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutProfissionalInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUncheckedUpdateManyWithoutProfissionalInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkUpdateWithoutProfissionalInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateWithoutProfissionalInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyWithoutProfissionalInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ContatoUpdateWithoutProfissionalInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    Admin?: AdminUpdateOneWithoutContatosNestedInput
    ConsultorioEscola?: ConsultorioEscolaUpdateOneWithoutContatosNestedInput
  }

  export type ContatoUncheckedUpdateWithoutProfissionalInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContatoUncheckedUpdateManyWithoutProfissionalInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    consultorioEscolaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoCreateManyConsultorioEscolaInput = {
    id?: string
    cidade: string
    bairro: string
    logradouro: string
    numero?: number | null
    complemento?: string | null
    profissionalId?: string | null
  }

  export type ContatoCreateManyConsultorioEscolaInput = {
    id?: string
    ddd: number
    numero: number
    isTelegram: boolean
    isWhatsapp: boolean
    adminId?: string | null
    profissionalId?: string | null
  }

  export type EspecialidadeCreateManyConsultorioEscolaInput = {
    id?: string
    nome: string
    profissionalId?: string | null
  }

  export type EnderecoUpdateWithoutConsultorioEscolaInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Profissional?: ProfissionalUpdateOneWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutConsultorioEscolaInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUncheckedUpdateManyWithoutConsultorioEscolaInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContatoUpdateWithoutConsultorioEscolaInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    Admin?: AdminUpdateOneWithoutContatosNestedInput
    Profissional?: ProfissionalUpdateOneWithoutContatosNestedInput
  }

  export type ContatoUncheckedUpdateWithoutConsultorioEscolaInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContatoUncheckedUpdateManyWithoutConsultorioEscolaInput = {
    ddd?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    isTelegram?: BoolFieldUpdateOperationsInput | boolean
    isWhatsapp?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadeUpdateWithoutConsultorioEscolaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Profissional?: ProfissionalUpdateOneWithoutEspecialidadesNestedInput
  }

  export type EspecialidadeUncheckedUpdateWithoutConsultorioEscolaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadeUncheckedUpdateManyWithoutConsultorioEscolaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
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