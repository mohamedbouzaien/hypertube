import { Exclude } from "class-transformer";
import LocalFile from "src/local-files/local-file.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column({unique: true})
  public email: string;
  @Column()
  public firstName: string;
  @Column()
  public lastName: string;
  @Column({unique: true})
  public username: string;
  @Column()
  @Exclude()
  public password: string;
  @Column({nullable: true})
  public currentHashedRefreshToken?: string;
  @Column({nullable: true})
  @Exclude()
  public intra_id: string;
  @Column({nullable: true})
  @Exclude()
  public twoFactorAuthenticationSecret?: string;
  @Column({default: false})
  public isTwoFactorAuthenticationEnabled: boolean;
  @JoinColumn({name: 'avatar_id'})
  @OneToOne(() => LocalFile, {
    nullable: true
  })
  public avatar?: LocalFile;
  @Column({nullable: true})
  public avatar_id?: number;
}
export default User;