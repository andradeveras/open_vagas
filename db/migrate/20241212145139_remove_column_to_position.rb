class RemoveColumnToPosition < ActiveRecord::Migration[7.1]
  def change
    remove_column :positions, :description # Remove a coluna description da tabela positions
  end
end
