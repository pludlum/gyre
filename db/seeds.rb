# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


def create_poets
  poets = [];

  shakespeare = {
    name: "William Shakespeare",
    img_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506015246/shakespeare-67698_640_guxmbj.jpg",
    banner_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506015592/vintage-1721959_1920_lk2fw9.jpg",
    description: "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet, and the 'Bard of Avon'. His extant works, including collaborations, consist of approximately 38 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright."
  }
  poets.push(shakespeare)



  poets.each do |poet|
    Poet.create(poet)
  end
end

create_poets
