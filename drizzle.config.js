/** @type {import('drizzle-kit').Config} */
export default {
    schema:"./utils/schema.tsx",
    dialect:"postgresql",
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_4Z2oOCnQvTiH@ep-orange-leaf-a4dncdce-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
    }
};