module CompaniesHelper
  def dynamic_url_company  # Define a URL dinâmica para a empresa do usuário atual
    if current_user&.company.present? && current_user.company.try(:id).present? # Verifica se o usuário tem uma empresa cadastrada e se ela tem um ID associado a ela 
      edit_company_path(current_user.company)
    else
      new_company_path
    end
  end
end
