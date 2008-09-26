class CreateBozons < ActiveRecord::Migration
  def self.up
    create_table :bozons do |t|
      t.text :content
      t.text :content_id
      t.text :parent_id
      t.timestamps
    end
  end

  def self.down
    drop_table :bozons
  end
end
