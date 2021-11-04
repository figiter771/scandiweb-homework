import { Field, Query } from "@tilework/opus";

export const QUERY = {
    PRODUCTS : new Query("categories",true)
    .addField("name")
    .addField(new Field('products', true)
            .addField("id")
            .addField("name")
            .addField("gallery")
        )
    ,
}