CREATE CONSTRAINT person_email_unique IF NOT EXISTS FOR (person:Person) REQUIRE person.email IS UNIQUE;
CREATE CONSTRAINT person_id_unique IF NOT EXISTS FOR (person:Person) REQUIRE person.id IS UNIQUE;
CREATE CONSTRAINT technology_name_unique IF NOT EXISTS FOR (technology:Technology) REQUIRE technology.name IS UNIQUE;
CREATE CONSTRAINT industry_name_unique IF NOT EXISTS FOR (industry:Industry) REQUIRE industry.name IS UNIQUE;
