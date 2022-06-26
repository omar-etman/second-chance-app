import { User } from "@prisma/client"
import { UserState } from "@supabase/supabase-auth-helpers/react/types"

export const controlledRender = (item1: JSX.Element, item2: JSX.Element | null, condition:User | null) => {
    if(!condition){
      return item2
    }else{
      return item1
    }
  }