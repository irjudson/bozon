class CreateBozons < ActiveRecord::Migration
  def self.up
    create_table :bozons do |t|
      t.text :content
      t.timestamps
    end
  end

  def self.down
    drop_table :bozons
  end
end
