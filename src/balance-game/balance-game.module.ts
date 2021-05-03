import { Module } from "@nestjs/common";
import { BalanceGameService } from "./balance-game.service";
import { BalanceGameResolver } from "./balance-game.resolver";
import { BalanceGame } from "./balance-game.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { User } from "../user/user.model";
import { BalanceGameKeywordModule } from "../balance-game-keyword/balance-game-keyword.module";

@Module({
  imports: [TypeOrmModule.forFeature([BalanceGame, User]), BalanceGameKeywordModule],
  providers: [BalanceGameResolver, BalanceGameService],
})
export class BalanceGameModule {}