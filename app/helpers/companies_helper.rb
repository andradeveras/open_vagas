module CompaniesHelper
  def dynamic_url_company  # Define a URL dinâmica para a empresa do usuário atual
    if current_user.company.present? 
      edit_company_path(current_user.company)
    else
      new_company_path
    end
  end
end
