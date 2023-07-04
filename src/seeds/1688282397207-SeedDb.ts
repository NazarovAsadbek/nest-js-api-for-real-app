import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1688282397207 implements MigrationInterface {
  name = 'CreateTags1688282397207';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO TAGS (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password is 12345!!!
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('NazarovAsadbek', 'nazarov_asabek_job@mail.ru', '$2b$10$icYgWsg6f5SO6ZZj4V4s0u3IgbIOLRsWwB7XcuAdM1RcF.XdESCkC')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
