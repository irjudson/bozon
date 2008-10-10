class CreateBozons < ActiveRecord::Migration
  def self.up
    create_table :bozons do |t|
      t.string :data
      t.string :cid
      t.string :uuid
      t.string :parent

      t.timestamps
    end
  end

  def self.down
    drop_table :bozons
  end
end
